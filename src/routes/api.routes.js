import {Router} from 'express';
import apiAuthors from './author.router.js';

const router = Router();

router.use('/authors', apiAuthors);


export default router;