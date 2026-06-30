import express from "express";
import sequelize from "./config/database.js";
import "./models/arbitre.model.js";

const app = express();

app.use(express.json());

const PORT =3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        await sequelize.sync();
        console.log("Tables created successfully!");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
     } catch (error) {
        console.error("Database connection error:", error);
     }
    };

    startServer();