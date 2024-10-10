const express = require('express');
const userWorkoutController = require('../controllers/userWorkoutController');
const router = express.Router();

router.post('/users/:user_id/workout/:workout_id/user-workouts', userWorkoutController.createUserWorkout); // Create a new user workout
router.get('/users/:user_id/user-workouts', userWorkoutController.getUserWorkouts); // Get A user workouts history
router.get('/workout/:workout_id/user-workouts', userWorkoutController.getUserWorkoutsName); //Get workout name in users
router.get('/user-workouts', userWorkoutController.getAllUserWorkouts); // Get all user workouts
router.get('/user-workouts/:id', userWorkoutController.getUserWorkoutById); // Get user workout by ID
router.put('/user-workouts/:id', userWorkoutController.updateUserWorkout); // Update user workout by ID
router.delete('/user-workouts/:id', userWorkoutController.deleteUserWorkout); // Delete user workout by ID

module.exports = router;
