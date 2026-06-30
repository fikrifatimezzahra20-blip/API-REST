import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Referee = sequelize.define("Referee", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confederation: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: "referees",
    timestamps: false,
});

export default Referee;