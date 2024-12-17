import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const blogPosts = [
    { id: 1, title: "First Post", content: "This is the first blog post content." },
    { id: 2, title: "Second Post", content: "This is another blog post content." }
];

const App = () => {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                My Blog
            </Typography>
            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} key={post.id}>
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

export default App;
