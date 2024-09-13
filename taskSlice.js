// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    addComment: (state, action) => {
      const { taskId, comment } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.comments.push(comment);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, addComment } = taskSlice.actions;

export default taskSlice.reducer;
