import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Blog App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Explore our blog posts by clicking the button below.
        </Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/blog-posts')}
          >
            Blog Posts
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
