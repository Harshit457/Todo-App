import React from "react";
import { Search } from "lucide-react";

export const TodoToolbar = ({ searchTerm, filter, onSearchChange, onFilterChange }) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "pending", label: "Active" },
    { id: "completed", label: "Done" },
  ];

  return (
    <div
      className="p-4 md:p-6 rounded-xl shadow-md mb-6 transition-all"
      style={{
        backgroundColor: "transparent", // fully transparent
        border: "1px solid #3b82f6", // blue border (Tailwind blue-500)
        backdropFilter: "none", // remove blur
      }}
    >
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between">
        {/* Search */}
        <div className="flex-1 relative w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search tasks..."
            className="w-full pl-10 pr-4 py-2 md:py-3 rounded-lg border border-blue-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent transition-all"
          />
        </div>

        {/* Filter Buttons */}
        <div
          className="flex gap-2 rounded-lg p-1 border transition-all"
          style={{
            borderColor: "#3b82f6", // blue border
            backgroundColor: "transparent", // fully transparent
            backdropFilter: "none", // remove blur
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => onFilterChange(f.id)}
              className={`px-3 md:px-6 py-2 rounded-md text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
