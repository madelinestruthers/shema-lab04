// src/components/Task.jsx
import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <button className="remove-button-clicked" onClick={() => deleteTask(task.id)}>Remove</button>
    </div>
  );
};

export default Task;
