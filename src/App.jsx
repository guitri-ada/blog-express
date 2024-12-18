import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const App = () => {
  const navigateToPosts = () => {
    window.location.href = '/posts';
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Blog App
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Explore our latest blog posts.
      </Typography>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={navigateToPosts}>
          View Posts
        </Button>
      </div>
    </Container>
  );
};

export default App;
