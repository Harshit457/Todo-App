import React from "react";
import { CheckCircle2, Circle, Trash2, Edit2, X, Calendar } from "lucide-react";

export const TodoRow = ({
  todo,
  isEditing,
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
    <tr
      className={`transition-all duration-200 ${
        todo.status === "completed" ? "bg-green-500/10" : "hover:bg-white/10"
      }`}
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* Status */}
      <td className="px-4 py-4">
        <button
          onClick={onToggleStatus}
          className="hover:scale-110 transition-transform"
        >
          {todo.status === "completed" ? (
            <CheckCircle2 size={24} className="text-green-500" />
          ) : (
            <Circle size={24} className="text-slate-400 hover:text-blue-500" />
          )}
        </button>
      </td>

      {/* Task Name */}
      <td className="px-4 py-4">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={onEditTextChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSaveEdit();
              if (e.key === "Escape") onCancelEdit();
            }}
            className="w-full px-3 py-2 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 caret-white bg-transparent text-base transition-all"
            autoFocus
          />
        ) : (
          <div
            className={`text-sm md:text-base font-medium ${
              todo.status === "completed"
                ? "line-through text-slate-400"
                : "text-white"
            }`}
          >
            {todo.name}
          </div>
        )}
      </td>

      {/* Description */}
      <td className="px-4 py-4 text-slate-300">
        {isEditing ? (
          <input
            type="text"
            value={editDesc}
            onChange={onEditDescChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSaveEdit();
              if (e.key === "Escape") onCancelEdit();
            }}
            placeholder="Add description"
            className="w-full px-3 py-2 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 caret-white bg-transparent text-base transition-all"
          />
        ) : (
          <div>
            {todo.description || (
              <span className="italic text-slate-500">No description</span>
            )}
          </div>
        )}
      </td>

      {/* Date */}
      <td className="px-4 py-4 text-xs text-slate-400">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span className="sm:hidden">
            {todo.createdAt
              ? new Date(todo.createdAt).toLocaleDateString("en-GB")
              : "N/A"}
          </span>
          <span className="hidden sm:inline">
            {todo.createdAt
              ? new Date(todo.createdAt).toLocaleDateString()
              : "N/A"}
          </span>
        </div>
      </td>

      {/* Actions */}
      <td className="px-4 py-4 flex justify-center gap-2">
        {isEditing ? (
          <>
            <button
              className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm"
              onClick={onSaveEdit}
            >
              Save
            </button>
            <button
              className="px-2 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20"
              onClick={onCancelEdit}
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            {todo.status !== "completed" && (
              <button
                className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-blue-400"
                onClick={onStartEdit}
              >
                <Edit2 size={18} />
              </button>
            )}
            <button
              className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-red-400"
              onClick={onDelete}
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};
