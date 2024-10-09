const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Workout = sequelize.define('Workout', {
    workout_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    workout_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('strength', 'cardio', 'flexibility', 'balance', 'endurance'),
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,  // in minutes
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
        allowNull: false,
    },
    calories_burned: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = Workout;
