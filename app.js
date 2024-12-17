const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// API routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/api', indexRouter);
app.use('/api', usersRouter);

// Catch-all route for React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export app for use in `www`
module.exports = app;
