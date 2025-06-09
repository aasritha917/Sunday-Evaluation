import React, { useState } from 'react';
import { Priority, Task } from '../types';

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.LOW);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) return;

    const newTask: Task = {
      id: Date.now(),
      description,
      priority,
      completed: false,
    };

    addTask(newTask);
    setDescription('');
    setPriority(Priority.LOW);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
        {Object.values(Priority).map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
