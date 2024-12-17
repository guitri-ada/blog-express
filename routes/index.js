var express = require('express');
var router = express.Router();
const BlogPost = require('../models/BlogPost');

// In-memory data store for blog posts
let blogPosts = [];

let newPost = new BlogPost(1, "test", "test");
let newPost2 = new BlogPost(2, "test", "test");
let newPost3 = new BlogPost(3, "test", "test");

blogPosts.push(newPost);
blogPosts.push(newPost2);
blogPosts.push(newPost3);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', blogPosts: blogPosts });
});

module.exports = router;
