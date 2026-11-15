import Author from "./author.model.js";
import Post from "./post.model.js";



Author.hasMany(Post, {
    foreignKey: "authorId",
    onDelete: "CASCADE"
});
Post.belongsTo(Author,{foreignKey: "authorId"});


export { Author, Post };