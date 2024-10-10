const express = require('express');
const workoutController = require('../controllers/workoutController');
const router = express.Router();

router.post('workout/', workoutController.createWorkout); // Create a new workout
router.get('workout/', workoutController.getAllWorkouts); // Get all workouts
router.get('workout/:id', workoutController.getWorkoutById); // Get workout by ID
router.put('workout/:id', workoutController.updateWorkout); // Update workout by ID
router.delete('workout/:id', workoutController.deleteWorkout); // Delete workout by ID

module.exports = router;
