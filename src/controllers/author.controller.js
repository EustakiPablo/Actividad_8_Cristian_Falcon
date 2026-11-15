import {Author} from "../models/index.js";
import {Post} from "../models/index.js";

const getAll = async (req, res) => {
    const authors = await Author.findAll();
    res.json(authors);
}


/*const create = async (req, res) => {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
}*/

const getById = async (req, res) => {
    const { id } = req.params;
    const author = await Author.findByPk(id);
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
}

const create = async (req, res) => {
    try {
        const newAuthor = await Author.create({
            ...req.body,
            image: req.file ? `/authors/${req.file.filename}` : null
        });

        res.status(201).json(newAuthor);

    } catch (error) {
        res.status(500).json({
            message: "Error creating author",
            error: error.message
        });
    }
};

const getAllPostsByAuthorId = async (req, res) => {
    const { id } = req.params;
    const author = await Author.findByPk(id, { include: [{ model: Post, include: [{ model: Author }] }] });

    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    res.json(author.Posts);
};

export {getAll, create, getById, getAllPostsByAuthorId};