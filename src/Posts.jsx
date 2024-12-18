import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.error('Failed to fetch posts:', err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography>{post.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
