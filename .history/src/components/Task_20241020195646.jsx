// src/components/Task.js
import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div style={{ 
      textDecoration: task.completed ? 'line-through' : 'none', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      margin: '10px 0'
    }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Remove</button>
    </div>
  );
};

export default Task;
