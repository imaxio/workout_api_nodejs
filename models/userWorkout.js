const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');
const Workout = require('./workout');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const UserWorkout = sequelize.define('UserWorkout', {
    user_workout_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,  // in minutes
      allowNull: false,
    },
    calories_burned: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  //   user_id: {  // Foriegn Key
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     references: {
  //         model: User,
  //         key: 'user_id' 
  //     }
  // }
  }, {
    timestamps: false,
});

UserWorkout.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
User.hasMany(UserWorkout, {foreignKey: 'user_id'})

UserWorkout.belongsTo(Workout, { foreignKey: 'workout_id' });
Workout.hasMany(UserWorkout, {foreignKey: 'workout_id'});

module.exports = UserWorkout;
