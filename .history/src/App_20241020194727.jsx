// src/App.js
import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the task's completion status
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Count pending tasks
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div>
      <h1>Day Planner</h1>
      <h2>{remainingTasks} tasks remaining</h2>

      <TaskForm addTask={addTask} />

      <div>
        {tasks.map(task => (
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
