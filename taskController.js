// backend/controllers/taskController.js
const Task = require('../models/Task'); // Adjust the path if needed

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { name, description, dueDate } = req.body;
  try {
    const task = new Task({ name, description, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, description, dueDate } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { name, description, dueDate }, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
