import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.taskName}</strong> - Due: {task.dueDate}
              <br />
              Dependencies: {task.dependencies.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
