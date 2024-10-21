// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Write a new task..." 
      />
      <button type="submit">Add to List</button>
    </form>
  );
};

export default TaskForm;
