import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const InstitutionModel = database.define('Institution', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    institution_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    institution_description: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    capacity_students: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    institution_price: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export { InstitutionModel }