import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const found = projects[parseInt(id)];
    if (!found) return navigate("/");
    setProject(found);
  }, [id, navigate]);

  const addTask = () => {
    const updatedProject = {
      ...project,
      tasks: [...(project.tasks || []), { title: taskTitle, completed: false }]
    };
    updateProjectInStorage(updatedProject);
    setTaskTitle("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...project.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    updateProjectInStorage({ ...project, tasks: updatedTasks });
  };

  const deleteTask = (index) => {
    const updatedTasks = [...project.tasks];
    updatedTasks.splice(index, 1);
    updateProjectInStorage({ ...project, tasks: updatedTasks });
  };

  const updateProjectInStorage = (updatedProject) => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects[parseInt(id)] = updatedProject;
    localStorage.setItem("projects", JSON.stringify(projects));
    setProject(updatedProject);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div style={{ margin: "100px" }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Created:</strong> {new Date(project.createdAt).toLocaleString()}</p>

      <h3>Tasks</h3>
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {(project.tasks || []).map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.completed ? <s>{task.title}</s> : task.title}
            &nbsp;
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
