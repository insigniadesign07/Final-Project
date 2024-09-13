import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [dependencies, setDependencies] = useState('');

  const handleAddTask = () => {
    const task = {
      taskName,
      priority,
      dueDate,
      dependencies: dependencies.split(',').map(dep => dep.trim())
    };
    addTask(task);
  };

  return (
    <div className="add-task-form">
      <input 
        type="text" 
        placeholder="Task name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Task dependencies (comma separated)" 
        value={dependencies} 
        onChange={(e) => setDependencies(e.target.value)} 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;
