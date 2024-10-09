const express = require('express');
const userWorkoutController = require('../controllers/userWorkoutController');
const router = express.Router();

router.post('/', userWorkoutController.createUserWorkout); // Create a new user workout
router.get('/', userWorkoutController.getAllUserWorkouts); // Get all user workouts
router.get('/:id', userWorkoutController.getUserWorkoutById); // Get user workout by ID
router.put('/:id', userWorkoutController.updateUserWorkout); // Update user workout by ID
router.delete('/:id', userWorkoutController.deleteUserWorkout); // Delete user workout by ID

module.exports = router;
