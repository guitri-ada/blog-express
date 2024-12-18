const express = require('express');
const router = express.Router();

let blogPosts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
];

// GET all blog posts
router.get('/', (req, res) => {
  res.json({ success: true, posts: blogPosts });
});

module.exports = router;
