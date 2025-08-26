import React, { useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState([
    {
      _id: "1",
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      status: "New",
      qualification: "High",
      interestField: "Software",
      source: "Website",
      assignedTo: "Alice",
      updatedAt: "2025-08-24T10:00:00Z",
    },
    {
      _id: "2",
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
      status: "Qualified",
      qualification: "Medium",
      interestField: "Hardware",
      source: "Referral",
      assignedTo: "Bob",
      updatedAt: "2025-08-25T12:30:00Z",
    },
    {
      _id: "3",
      name: "Michael Johnson",
      phone: "555-123-4567",
      email: "michael@example.com",
      status: "Follow-Up",
      qualification: "Low",
      interestField: "Consulting",
      source: "Event",
      assignedTo: "Charlie",
      updatedAt: "2025-08-26T14:15:00Z",
    },
  ]);

  const addLead = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  return (
    <div className="p-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Leads</h1>
          <p className="text-gray-500">Manage and track your leads</p>
        </div>
        <button
          onClick={() => addLead({ _id: "4", name: "New Lead" })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Lead
        </button>
      </div>
      <hr className="border-gray-300" />

      {/* Leads list */}
      <div className="mt-4">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="border p-4 rounded-lg mb-3 bg-white shadow-sm"
          >
            <p className="font-medium">{lead.name}</p>
            <p className="text-gray-500">{lead.phone}</p>
            <p className="text-gray-500">{lead.email}</p>
            <p className="text-gray-500">Status: {lead.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
