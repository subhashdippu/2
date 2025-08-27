import React, { useState, useEffect } from "react";
import LeadTable from "../components/LeadTable";
import Filters from "../components/LeadFilters";
import Modal from "../components/Modal";

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

export default function LeadsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch leads from backend
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/leads");
        if (!response.ok) throw new Error("Failed to fetch leads");
        const data = await response.json();
        setLeads(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const addLead = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  if (loading) return <p className="p-4">Loading leads...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-64  h-screen p-4 border border-gray-300">
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
        {/* Top bar */}
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add Lead
          </button>
        </div>
        <hr className="border-gray-300" />

        {/* Filters & Search */}
        <div className="mb-4">
          {/* Filters & Search */}
          <div className="mb-4">
            <Filters onResults={(filteredLeads) => setLeads(filteredLeads)} />
          </div>

          {/* <Filters /> */}
        </div>

        {/* Leads Table */}
        <LeadTable leads={leads} />
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addLead={addLead}
        />
      </div>
    </div>
  );
}
