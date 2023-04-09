import express from 'express';
import * as ForumPostsController from '../controllers/forum-posts';

const router = express.Router();

router.get('/', ForumPostsController.getForumPosts);
router.post('/', ForumPostsController.createForumPost);

export default router;
