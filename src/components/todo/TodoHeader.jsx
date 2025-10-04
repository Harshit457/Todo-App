import React from "react";

export const TodoHeader = () => {
  return (
    <div
      className="text-center mb-6 relative rounded-xl p-4"
      style={{
        backgroundColor: "transparent", // fully transparent
        border: "none",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-2  text-blue-300">
        TODO APPLICATION
      </h1>
    </div>
  );
};
