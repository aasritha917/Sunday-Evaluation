import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "./features/tasks/tasksSlice";
import "./App.css"

export default function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="container">
      <h1>📝 Task List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "done" : ""}>
            <span onClick={() => dispatch(toggleTask(task.id))}>
              {task.text}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}