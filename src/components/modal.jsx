import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddLeadModal({ open, onClose, addLead }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    altPhone: "",
    email: "",
    altEmail: "",
    status: "New",
    qualification: "",
    interestField: "",
    source: "",
    assignedTo: "",
    jobInterest: "",
    state: "",
    city: "",
    passoutYear: "",
    heardFrom: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Simulate adding lead locally
    try {
      const newLead = {
        ...formData,
        _id: Date.now().toString(),
        updatedAt: new Date().toISOString(),
      };
      addLead(newLead);

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        altPhone: "",
        email: "",
        altEmail: "",
        status: "New",
        qualification: "",
        interestField: "",
        source: "",
        assignedTo: "",
        jobInterest: "",
        state: "",
        city: "",
        passoutYear: "",
        heardFrom: "",
      });

      onClose(); // Close modal after adding
    } catch (err) {
      setError("Failed to add lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Lead</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Error / Success Messages */}
        {error && <p className="text-red-600 mb-3">{error}</p>}
        {success && (
          <p className="text-green-600 mb-3">Lead added successfully!</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
            </div>

            {/* Alt Phone */}
            <div>
              <label className="block mb-1">Alt. Phone</label>
              <input
                type="text"
                name="altPhone"
                value={formData.altPhone}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
                required
              />
            </div>

            {/* Alt Email */}
            <div>
              <label className="block mb-1">Alt. Email</label>
              <input
                type="email"
                name="altEmail"
                value={formData.altEmail}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              >
                <option>New</option>
                <option>In Progress</option>
                <option>Converted</option>
                <option>Qualified</option>
                <option>Follow-Up</option>
              </select>
            </div>

            {/* Qualification */}
            <div>
              <label className="block mb-1">Qualification</label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select</option>
                <option>High School</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>Other</option>
              </select>
            </div>

            {/* Interest Field */}
            <div>
              <label className="block mb-1">Interest Field</label>
              <select
                name="interestField"
                value={formData.interestField}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>

            {/* Source */}
            <div>
              <label className="block mb-1">Source</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select</option>
                <option>Website</option>
                <option>Social Media</option>
                <option>Email Campaign</option>
                <option>Cold Call</option>
                <option>Other</option>
              </select>
            </div>

            {/* Assigned To */}
            <div>
              <label className="block mb-1">Assigned To</label>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* Job Interest */}
            <div>
              <label className="block mb-1">Job Interest</label>
              <input
                type="text"
                name="jobInterest"
                value={formData.jobInterest}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* Passout Year */}
            <div>
              <label className="block mb-1">Passout Year</label>
              <input
                type="text"
                name="passoutYear"
                value={formData.passoutYear}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            {/* Heard From */}
            <div className="col-span-2">
              <label className="block mb-1">Heard From</label>
              <input
                type="text"
                name="heardFrom"
                value={formData.heardFrom}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              {loading ? "Saving..." : "Add Lead"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
