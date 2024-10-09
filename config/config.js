const { Sequelize } = require("sequelize");

// For PostgreSQL or MySQL:
const sequelize = new Sequelize("your_database", "username", "password", {
    host: "localhost",
    dialect: "postgres", // or 'mysql'
});

module.exports = sequelize;
