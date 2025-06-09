import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} filter={filter} />
    </div>
  );
};

export default App;
