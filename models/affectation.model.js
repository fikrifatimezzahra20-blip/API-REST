import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Assignment = sequelize.define(
    "Assignment",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        refereeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        matchId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "assignments",
        timestamps: false,
    }
);

export default Assignment;