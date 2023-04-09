import express from 'express';
import forumPostsRoutes from './routes/forum-posts';

const app = express();

app.use(express.json());

app.use('/posts', forumPostsRoutes);

export default app;
