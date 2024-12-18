const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// In-memory data store
let blogPosts = [
  new BlogPost(1, "First Post", "This is the content of the first post"),
  new BlogPost(2, "Second Post", "This is the content of the second post"),
  new BlogPost(3, "Third Post", "This is the content of the third post"),
];

// GET all blog posts
router.get('/', (req, res) => {
  res.json({ success: true, posts: blogPosts });
});

// GET a specific blog post by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find((p) => p.id === id);

  if (post) {
    res.json({ success: true, post });
  } else {
    res.status(404).json({ success: false, message: "Post not found" });
  }
});

module.exports = router;
