const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes'); // Your auth routes
require('dotenv').config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Root route for testing
app.get('/', (req, res) => {
  res.send('Finally Server Challoo Hogya!');
});

// Use the auth routes
app.use('/api/auth', authRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set the static folder (assuming React is built into 'frontend/build')
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  // Serve the React frontend (or any static frontend)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
