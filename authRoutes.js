// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure the path is correct

// Define your routes here
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;

