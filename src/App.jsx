import "./App.css";
import Todo from "./pages/Todo";
import Home from "./pages/Home";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="relative w-full h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
