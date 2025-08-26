import React, { useState } from "react";

import {
  Squares2X2Icon,
  UserIcon,
  BellIcon,
  Cog6ToothIcon,
  CubeIcon,
  ChartBarIcon,
  CalendarIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import LeadTable from "../components/LeadTable";

export default function LeadsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  return (
    <div className="flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-64 h-screen p-4 border border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">LeadCRM</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded hover:bg-gray-100"
            >
              {"<"}
            </button>
          </div>
          <hr className="border-gray-300" />
          <nav className="space-y-2">
            <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
              <Squares2X2Icon className="w-5 h-5" /> Dashboard
            </a>
            <a className="flex items-center gap-3 p-2 rounded bg-gray-100 font-semibold">
              <UserIcon className="w-5 h-5" /> Leads
            </a>
            <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
              <CalendarIcon className="w-5 h-5" /> Follow-Ups
            </a>
            <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
              <ChartBarIcon className="w-5 h-5" /> Sales Activity
            </a>
            <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
              <CubeIcon className="w-5 h-5" /> Products
            </a>
            <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
              <BellIcon className="w-5 h-5" /> Notifications
            </a>
            <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
              <Cog6ToothIcon className="w-5 h-5" /> Settings
            </a>
          </nav>
        </aside>
      )}

      {/* Main content */}
      <div className="flex-1 p-6 ">
        <div className="flex justify-between items-center mb-4 ">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded"
            >
              <Bars3Icon className="w-5 h-5" /> Menu
            </button>
          )}
          <div>
            <h1 className="text-2xl font-bold">Leads</h1>
            <p className="text-gray-500">Manage and track your leads</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Lead
          </button>
        </div>
        <LeadTable leads={leads} />
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}
