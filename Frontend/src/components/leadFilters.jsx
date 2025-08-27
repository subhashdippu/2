import { useState } from "react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function LeadFilters({ onResults }) {
  const [showFilters, setShowFilters] = useState(true);
  const [conditions, setConditions] = useState([
    { field: "status", value: "" },
  ]);
  const [matchType, setMatchType] = useState("AND");
  const [search, setSearch] = useState("");

  const handleAddFilter = () => {
    setConditions([...conditions, { field: "status", value: "" }]);
  };

  const handleRemoveFilter = (index) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...conditions];
    updated[index][field] = value;
    setConditions(updated);
  };

  const applyFilters = async () => {
    try {
      const params = new URLSearchParams();

      if (search) params.append("search", search);
      if (conditions.length > 0) {
        params.append("conditions", JSON.stringify(conditions));
        params.append("matchType", matchType);
      }

      const res = await fetch(
        `http://localhost:5001/api/leads?${params.toString()}`
      );
      const data = await res.json();
      onResults(data); // send filtered leads back to parent
    } catch (err) {
      console.error("Filter error:", err);
    }
  };

  const clearFilters = async () => {
    setSearch("");
    setConditions([{ field: "status", value: "" }]);
    setMatchType("AND");

    try {
      const res = await fetch("http://localhost:5001/api/leads");
      const data = await res.json();
      onResults(data);
    } catch (err) {
      console.error("Reset filter error:", err);
    }
  };

  return (
    <div className="rounded-lg p-4 mb-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Leads Management</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 border rounded-lg text-sm font-medium text-gray-700"
          >
            <FunnelIcon className="w-4 h-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium">
            Add New Lead
          </button>
        </div>
      </div>

      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, email or phone..."
        className="w-full px-4 py-2 border rounded-lg mb-4"
      />

      {showFilters && (
        <div className="bg-white border rounded-lg p-5 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Advanced Filters</h2>

          {/* Match Type */}
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="matchType"
                checked={matchType === "AND"}
                onChange={() => setMatchType("AND")}
                className="accent-black"
              />
              <span>ALL conditions (AND)</span>
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="radio"
                name="matchType"
                checked={matchType === "OR"}
                onChange={() => setMatchType("OR")}
                className="accent-black"
              />
              <span>ANY condition (OR)</span>
            </label>
          </div>

          {/* Filter Rows */}
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-3 bg-gray-50 p-3 rounded-lg border"
            >
              <select
                value={condition.field}
                onChange={(e) => handleChange(index, "field", e.target.value)}
                className="flex-1 px-3 py-2 border rounded-lg"
              >
                <option value="status">Status</option>
                <option value="name">Name</option>
                <option value="phone">Contact</option>
                <option value="qualification">Qualification</option>
                <option value="interestField">Interest</option>
                <option value="source">Source</option>
                <option value="assignedTo">Assigned To</option>
                <option value="updatedAt">Updated At</option>
              </select>

              <input
                type="text"
                value={condition.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                placeholder={`Select ${condition.field}`}
                className="flex-1 px-3 py-2 border rounded-lg"
              />

              <button
                onClick={() => handleRemoveFilter(index)}
                className="p-2 text-gray-500 hover:text-red-600"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          ))}

          {/* Add Filter Button */}
          <button
            onClick={handleAddFilter}
            className="px-4 py-2 border rounded-lg mb-4 text-sm font-medium"
          >
            Add Filter
          </button>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={clearFilters}
              className="px-4 py-2 border rounded-lg text-sm font-medium"
            >
              Clear
            </button>
            <button
              onClick={applyFilters}
              className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
