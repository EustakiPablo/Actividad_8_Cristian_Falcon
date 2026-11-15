import {Router} from 'express';
import { getAll, create, getById, getAllPostsByAuthorId } from '../controllers/author.controller.js';
import upload from '../middleware/imgupload.middleware.js';

const router = Router();

router.get('/', getAll);

router.post('/', upload.single("image"), create);
/*

this post expects a body with the following structure:
{
    "name": "example",
    "email": "example@example.com",
    "image": file
}

*/ 

router.get('/:id', getById);

router.get('/:id/posts', getAllPostsByAuthorId);

export default router;