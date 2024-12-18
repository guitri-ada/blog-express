const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); // Blog posts API

// Serve React app for all frontend routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Export the app for use in bin/www
module.exports = app;
