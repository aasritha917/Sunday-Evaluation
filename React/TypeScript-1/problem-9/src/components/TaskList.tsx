import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  filter: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, filter }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description} ({task.priority})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
