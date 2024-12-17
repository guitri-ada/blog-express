var express = require('express');
var router = express.Router();
const BlogPost = require('../models/BlogPost');

// In-memory data store for blog posts
let blogPosts = [];

// Sample blog posts
let newPost = new BlogPost(1, "First Post", "This is the content of the first post");
let newPost2 = new BlogPost(2, "Second Post", "This is the content of the second post");
let newPost3 = new BlogPost(3, "Third Post", "This is the content of the third post");

blogPosts.push(newPost);
blogPosts.push(newPost2);
blogPosts.push(newPost3);

// Route: GET all blog posts
router.get('/api/posts', function(req, res) {
  res.json({ success: true, posts: blogPosts });
});

// Route: GET a specific blog post by ID
router.get('/api/posts/:id', function(req, res) {
  const id = parseInt(req.params.id);
  const post = blogPosts.find((p) => p.id === id);

  if (post) {
    res.json({ success: true, post: post });
  } else {
    res.status(404).json({ success: false, message: "Post not found" });
  }
});

// Route: POST to create a new blog post
router.post('/api/posts', function(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ success: false, message: "Title and content are required" });
  }

  const newPost = new BlogPost(
    blogPosts.length + 1,
    title,
    content
  );

  blogPosts.push(newPost);
  res.status(201).json({ success: true, post: newPost });
});

module.exports = router;
