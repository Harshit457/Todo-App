import React from "react";
import { TodoRow } from "./TodoRow";

export const TodoTable = ({
  todos,
  darkMode,
  searchTerm,
  editingId,
  editText,
  editDesc,
  onToggleStatus,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTextChange,
  onEditDescChange,
}) => {
  return (
    <div
      className="overflow-x-auto rounded-xl shadow-lg mt-6 transition-all"
      style={{
        backgroundColor: "transparent", // fully transparent
        border: "1px solid #3b82f6", // blue border (Tailwind blue-500)
        backdropFilter: "none", // remove blur
      }}
    >
      <table className="w-full">
        <thead
          className={`border-b-2 transition-colors ${
            darkMode ? "border-blue-500" : "border-blue-500"
          }`}
        >
          <tr>
            {["Status", "Task", "Description", "Date", "Actions"].map(
              (col, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-4 text-left text-xs md:text-sm font-semibold uppercase tracking-wider ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  } ${idx === 4 ? "text-center" : ""}`}
                >
                  {col}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody
          className={`divide-y transition-colors ${
            darkMode ? "divide-blue-500" : "divide-blue-200"
          }`}
        >
          {todos.length === 0 && (
            <tr>
              <td colSpan="5" className="px-4 py-12 text-center">
                <p
                  className={`text-lg font-medium transition-colors ${
                    darkMode ? "text-slate-400" : "text-slate-700"
                  }`}
                >
                  {searchTerm ? "No tasks found" : "No tasks yet"}
                </p>
                <p
                  className={`text-sm mt-2 ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  {searchTerm
                    ? "Try a different search term"
                    : "Add a task to get started"}
                </p>
              </td>
            </tr>
          )}

          {todos.map((todo) => (
            <TodoRow
              key={todo.id}
              todo={todo}
              darkMode={darkMode}
              isEditing={editingId === todo.id}
              editText={editText}
              editDesc={editDesc}
              onToggleStatus={() => onToggleStatus(todo)}
              onDelete={() => onDelete(todo)}
              onStartEdit={() => onStartEdit(todo)}
              onSaveEdit={() => onSaveEdit(todo)}
              onCancelEdit={onCancelEdit}
              onEditTextChange={onEditTextChange}
              onEditDescChange={onEditDescChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
