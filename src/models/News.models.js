import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const NewsModel = database.define('News', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title_news: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    news_description: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    image_news: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    news_author: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    news_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export { NewsModel }