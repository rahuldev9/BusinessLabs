"use client";

import { useState, useEffect } from "react";

const activity = [
  { date: "2026-03-01", device: "Chrome Windows", ip: "192.168.1.1" },
  { date: "2026-03-03", device: "Safari iPhone", ip: "192.168.1.20" },
  { date: "2026-03-05", device: "Edge Laptop", ip: "192.168.1.55" },
];

export default function ActivityTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const filtered = activity.filter((item) => {
    const matchSearch =
      item.device.toLowerCase().includes(search.toLowerCase()) ||
      item.ip.includes(search);

    const matchFilter =
      filter === "all" || item.device.toLowerCase().includes(filter);

    return matchSearch && matchFilter;
  });

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Controls skeleton */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="h-12 bg-gray-200 rounded-lg w-full sm:w-64"></div>
          <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
        </div>

        <div className="hidden md:block bg-white shadow-md rounded-xl p-4 space-y-3">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Mobile skeleton */}
        <div className="md:hidden space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow rounded-xl p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search device or IP..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="all">All Devices</option>
          <option value="chrome">Chrome</option>
          <option value="safari">Safari</option>
          <option value="edge">Edge</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm font-semibold">Date</th>
              <th className="p-4 text-left text-sm font-semibold">Device</th>
              <th className="p-4 text-left text-sm font-semibold">
                IP Address
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="p-6 text-center text-gray-500">
                  No activity found
                </td>
              </tr>
            )}

            {filtered.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 text-sm">{item.date}</td>
                <td className="p-4 text-sm">{item.device}</td>
                <td className="p-4 text-sm">{item.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.length === 0 && (
          <div className="text-center text-gray-500">No activity found</div>
        )}

        {filtered.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Date</span>
              <span className="text-sm font-medium">{item.date}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Device</span>
              <span className="text-sm">{item.device}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">IP</span>
              <span className="text-sm">{item.ip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
