import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({
  currentPage,
  totalPages,
  darkMode,
  indexOfFirstItem,
  indexOfLastItem,
  totalItems,
  onPageChange,
  onPrevPage,
  onNextPage,
}) => {
  if (totalItems === 0) return null;

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl p-2"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(6px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* Results info */}
      <div
        className={`text-sm ${
          darkMode ? "text-slate-300" : "text-slate-700"
        } transition-colors`}
      >
        Showing {indexOfFirstItem + 1} to{" "}
        {Math.min(indexOfLastItem, totalItems)} of {totalItems} tasks
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center gap-2">
          {/* Previous button */}
          <button
            onClick={onPrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg backdrop-blur-md transition-all ${
              currentPage === 1
                ? darkMode
                  ? "text-slate-600 cursor-not-allowed"
                  : "text-slate-400 cursor-not-allowed"
                : darkMode
                ? "text-white/80 hover:bg-white/10"
                : "text-gray-800 hover:bg-black/10"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Page numbers */}
          <div className="flex gap-1">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;

              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 &&
                  pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`min-w-[2.5rem] px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentPage === pageNumber
                        ? "bg-blue-600 text-white shadow-sm"
                        : darkMode
                        ? "text-white/80 hover:bg-white/10"
                        : "text-gray-800 hover:bg-black/10"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return (
                  <span
                    key={pageNumber}
                    className={`px-2 py-2 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          {/* Next button */}
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg backdrop-blur-md transition-all ${
              currentPage === totalPages
                ? darkMode
                  ? "text-slate-600 cursor-not-allowed"
                  : "text-slate-400 cursor-not-allowed"
                : darkMode
                ? "text-white/80 hover:bg-white/10"
                : "text-gray-800 hover:bg-black/10"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
