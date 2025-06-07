import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("projects")) || [];
    existing.push(newProject);
    localStorage.setItem("projects", JSON.stringify(existing));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:'200px'}}>
      <h2>Add Project</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br/>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br/>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
