// src/App.jsx
import React, { useState } from 'react';
import Task from './components/Task.jsx';
import TaskForm from './components/TaskForm.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="app-container">
      <h1>Day Planner</h1>
      <h2>{remainingTasks} tasks remaining</h2>

      <TaskForm addTask={addTask} />

      <div className="task-list">
        {tasks.map((task) => (
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
