const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');

const Goal = sequelize.define('Goal', {
    goal_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    goal_type: {
        type: DataTypes.ENUM('weight_loss', 'muscle_gain', 'endurance', 'flexibility', 'strength'),
        allowNull: false,
    },
    target: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    progress: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    user_id: {  // Foriegn Key
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id' 
        }
    }
}, {
    timestamps: true,
});

Goal.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = Goal;
