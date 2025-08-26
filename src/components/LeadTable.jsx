import { ChevronDownIcon } from "@heroicons/react/24/outline";

const statusColors = {
  New: "bg-blue-100 text-blue-600",
  Qualified: "bg-green-100 text-green-600",
  Converted: "bg-purple-100 text-purple-600",
  "Follow-Up": "bg-orange-100 text-orange-600",
  "In Progress": "bg-yellow-100 text-yellow-600",
};

export default function LeadTable({ leads }) {
  return (
    <div className="overflow-x-auto border rounded-lg bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Name",
              "Contact",
              "Status",
              "Qualification",
              "Interest",
              "Source",
              "Assigned To",
              "Updated At",
            ].map((col) => (
              <th key={col} className="px-4 py-3 font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  {col} <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </div>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} className="border-t">
              <td className="px-4 py-3 text-blue-600 font-medium">
                {lead.name}
              </td>
              <td className="px-4 py-3">
                {lead.phone}
                {lead.email ? (
                  <div className="text-xs text-gray-500">{lead.email}</div>
                ) : null}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors[lead.status] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="px-4 py-3">{lead.qualification}</td>
              <td className="px-4 py-3">{lead.interestField}</td>
              <td className="px-4 py-3">{lead.source}</td>
              <td className="px-4 py-3">{lead.assignedTo}</td>
              <td className="px-4 py-3">
                {new Date(lead.updatedAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-right">
                <ChevronDownIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
