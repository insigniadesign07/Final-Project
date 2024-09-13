// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController'); // Ensure the path is correct

// Define your routes here
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
