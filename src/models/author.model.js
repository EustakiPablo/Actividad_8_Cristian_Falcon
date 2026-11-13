import { DataTypes } from "sequelize";

import sequelize from "../config/db.js";

const Author = sequelize.define("Author", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Author;