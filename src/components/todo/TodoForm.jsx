import React from "react";
import { Plus } from "lucide-react";

export const TodoForm = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onSubmit,
  onKeyPress,
}) => {
  return (
    <div
      className="rounded-xl p-4 md:p-6 transition-all"
      style={{
        backgroundColor: "transparent", // fully transparent
        border: "1px solid #3b82f6", // blue border
        backdropFilter: "none", // no blur
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Task Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={onNameChange}
            onKeyPress={onKeyPress}
            placeholder="Enter task name"
            className="w-full p-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 caret-white text-base transition-all bg-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={onDescriptionChange}
            onKeyPress={onKeyPress}
            placeholder="Enter task description"
            className="w-full p-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 caret-white text-base transition-all bg-transparent"
          />
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-full md:w-auto bg-blue-500/30 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        <span>Add Task</span>
      </button>
    </div>
  );
};
