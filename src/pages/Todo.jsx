import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createtodo,
  deletetodo,
  updateStatusTodo,
  updatetodo,
} from "../store/todoSlice.js";
import { TodoHeader } from "../components/todo/TodoHeader.jsx";
import { TodoForm } from "../components/todo/TodoForm.jsx";
import { TodoToolbar } from "../components/todo/TodoToolbar.jsx";
import { TodoTable } from "../components/todo/TodoTable.jsx";
import { Pagination } from "../components/todo/Pagination.jsx";
import { ProgressBar } from "../components/todo/ProgressBar.jsx";
import Particles from "../components/todo/Particles.jsx";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const [name, setTodoName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState("");
  const [editDesc, setEditDesc] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(10);
  const dispatch = useDispatch();

  const createTodoDispatch = () => {
    if (name.trim() === "") return;
    dispatch(
      createtodo({
        id: Date.now(),
        name: name.trim(),
        description: description.trim(),
        status: "pending",
        createdAt: new Date().toISOString(),
      })
    );
    setTodoName("");
    setDescription("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      createTodoDispatch();
    }
  };

  const updatestatusDispatch = (todo) => {
    const newStatus = todo.status === "pending" ? "completed" : "pending";
    dispatch(updateStatusTodo({ id: todo.id, status: newStatus }));
  };

  const deletetodoDispatch = (todo) => {
    dispatch(deletetodo({ id: todo.id }));
    const newFilteredTodos = filteredTodos.filter((t) => t.id !== todo.id);
    const newTotalPages = Math.ceil(newFilteredTodos.length / itemsPerPage);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.name);
    setEditDesc(todo.description || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
    setEditDesc("");
  };

  const saveEdit = (todo) => {
    if (editText.trim() !== "") {
      dispatch(
        updatetodo({
          id: todo.id,
          name: editText.trim(),
          description: editDesc.trim(),
        })
      );
    }
    cancelEdit();
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.status === "completed";
      if (filter === "pending") return todo.status === "pending";
      return true;
    })
    .filter(
      (todo) =>
        todo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (todo.description &&
          todo.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstItem, indexOfLastItem);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchTerm]);

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.status === "completed").length,
    pending: todos.filter((t) => t.status === "pending").length,
  };

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Particle background */}
      <div className="fixed inset-0 pointer-events-none z-0 ">
        <Particles
          particleColors={[
            "#ffffff",
            "#a5b4fc",
            "#818cf8",
            "#facc15",
            "#f472b6",
          ]}
          particleCount={50000}
          particleSpread={60}
          speed={0.25}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={15}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div
        className="relative p-4 md:p-8  text-white"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto mb-8">
          <TodoHeader />

          <TodoForm
            name={name}
            description={description}
            onNameChange={(e) => setTodoName(e.target.value)}
            onDescriptionChange={(e) => setDescription(e.target.value)}
            onSubmit={createTodoDispatch}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-xl shadow-lg overflow-hidden transition-all"
            style={{
              backgroundColor: "transparent", // fully transparent
              border: "none", // remove border
              backdropFilter: "none", // no blur
            }}
          >
            <TodoToolbar
              searchTerm={searchTerm}
              filter={filter}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
              onFilterChange={setFilter}
            />

            <TodoTable
              todos={currentTodos}
              searchTerm={searchTerm}
              editingId={editingId}
              editText={editText}
              editDesc={editDesc}
              onToggleStatus={updatestatusDispatch}
              onDelete={deletetodoDispatch}
              onStartEdit={startEdit}
              onSaveEdit={saveEdit}
              onCancelEdit={cancelEdit}
              onEditTextChange={(e) => setEditText(e.target.value)}
              onEditDescChange={(e) => setEditDesc(e.target.value)}
            />

            {filteredTodos.length > 0 && (
              <div
                className="px-4 py-4 border-t"
                style={{ backgroundColor: "transparent", borderTop: "none" }}
              >
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  indexOfFirstItem={indexOfFirstItem}
                  indexOfLastItem={indexOfLastItem}
                  totalItems={filteredTodos.length}
                  onPageChange={setCurrentPage}
                  onPrevPage={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  onNextPage={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
                <ProgressBar completed={stats.completed} total={stats.total} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
