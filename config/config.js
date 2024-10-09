const { Sequelize } = require("sequelize");

// For PostgreSQL or MySQL:
const sequelize = new Sequelize("workout_api_db", "workout", "MkyxU5Ww6rh1Nguzciso9iwaZ0M4ozC0", {
    host: "dpg-cs37use8ii6s738i2ns0-a",
    dialect: "postgres", // or 'mysql'
});

module.exports = sequelize;
