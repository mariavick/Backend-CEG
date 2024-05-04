import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const CourseModel = database.define('Course', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    course_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    course_description: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    course_duration: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    course_price: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export { CourseModel }