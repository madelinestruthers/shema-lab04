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
      <button onClick={() => deleteTask(task.id)}>Remove</button>
    </div>
  );
};

export default Task;
