import React from "react";

export const ProgressBar = ({ completed, total, darkMode }) => {
  if (total === 0) return null;
  const percentage = (completed / total) * 100;

  return (
    <div
      className="mt-4 rounded-xl p-3"
      style={{
        backgroundColor: darkMode
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.05)",
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div
        className={`flex justify-between text-xs mb-1 transition-colors ${
          darkMode ? "text-slate-300" : "text-slate-700"
        }`}
      >
        <span>Overall Progress</span>
        <span>
          {completed} / {total} completed
        </span>
      </div>
      <div
        className="rounded-full h-2 overflow-hidden"
        style={{
          backgroundColor: darkMode
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="bg-gradient-to-r from-green-400 to-emerald-500 h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
