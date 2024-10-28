// src/components/Task.jsx
import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        disabled={task.completed} // Disable checkbox if task is completed
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
