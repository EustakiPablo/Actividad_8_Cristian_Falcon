import { DataTypes } from "sequelize";

import sequelize from "../config/db.js";

const Post = sequelize.define("Post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Post;