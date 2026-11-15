import {Router} from 'express';
import { getAll, create, getById, getByAuthorId } from '../controllers/post.controller.js';

const router = Router();



router.get('/', getAll);

router.get('/:id', getById);

router.get('/author/:authorId', getByAuthorId);

router.post('/', create);


export default router;