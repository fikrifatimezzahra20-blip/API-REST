import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test","fati","1234",{
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
export default sequelize;
