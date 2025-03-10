const express = require('express');
const cors = require('cors');
const path = require('path');
const { getRandomProblem } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Debug middleware to log all requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Route to get a random math problem
app.get('/api/problem', (req, res) => {
    const problem = getRandomProblem();
    console.log('Sending problem:', problem);
    res.json(problem);
});

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Public directory:', path.join(__dirname, '../public'));
}); 