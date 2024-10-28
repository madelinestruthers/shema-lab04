// src/App.jsx
import React, { useState, useEffect } from 'react';
import Task from './components/Task.jsx';
import TaskForm from './components/TaskForm.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // State for task filter

  useEffect(() => {
    document.title = 'Day Planner';
  }, []);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  // Filter tasks based on selected filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // Default: show all tasks
  });

  return (
    <div className="app-container">
      <h1>Day Planner</h1>
      <h2>{remainingTasks} tasks remaining</h2>

      <TaskForm addTask={addTask} />

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {/* Render Filtered Tasks */}
      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
