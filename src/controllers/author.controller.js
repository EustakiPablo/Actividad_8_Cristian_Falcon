import {Author} from "../models/index.js";

const getAll = async (req, res) => {
    const authors = await Author.findAll();
    res.json(authors);
}

const create = async (req, res) => {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
}


export {getAll, create};