import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Ensure this import path is correct

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add your reducers here
  },
});

export default store; // Default export
