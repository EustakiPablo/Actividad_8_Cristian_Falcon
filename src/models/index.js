import Author from "./author.model.js";
import Post from "./post.model.js";



Author.hasMany(Post, {onDelete: "CASCADE"});
Post.belongsTo(Author);


export { Author, Post };