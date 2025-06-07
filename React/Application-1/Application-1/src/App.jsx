import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails"; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddProject />} />
      <Route path="/project/:id" element={<ProjectDetails />} /> {/* ✅ */}
    </Routes>
  </Router>
);

export default App;
