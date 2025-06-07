import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(stored);
  }, []);

  const deleteProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <div style={{ margin: "100px" }}>
      <h1>Projects</h1>
      <Link to="/add" style={{color:'white'}}>Add Project</Link>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={`/project/${index}`}>{project.title}</Link>
            &nbsp;
            <button onClick={() => deleteProject(index)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
