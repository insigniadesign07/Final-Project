import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';






const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the existing task list
  };

  return (
    <div className="app">
      <h1>Task Management System</h1>

      {/* Pass the addTask function as a prop */}
      <AddTaskForm addTask={addTask} />

      {/* Display the TaskList */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
