import {Router} from 'express';
import apiAuthors from './author.router.js';
import apiPosts from './post.router.js';

const router = Router();

router.use('/authors', apiAuthors);

router.use('/posts', apiPosts);

export default router;