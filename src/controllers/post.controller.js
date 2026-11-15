import { Post } from "../models/index.js";
import { Author } from "../models/index.js";

const getAll = async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
}

const create = async (req, res) => {
    try {
        const newPost = await Post.create({...req.body});
        
        const postWithAuthor = await Post.findByPk(newPost.id, { include: [{ model: Author }] });

        res.status(201).json(postWithAuthor);
    }catch (error) {
        res.status(500).json({
            message: "Error creating post",
            error: error.message
        });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id, { include: [{ model: Author }] }); 
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
}

const getByAuthorId = async (req, res) => {
    const { authorId } = req.params;
    const posts = await Post.findAll({ where: { authorId }, include: [{ model: Author }] });
    res.json(posts);
}

export { getAll, create, getById, getByAuthorId };