const express = require('express');
const workoutController = require('../controllers/workoutController');
const router = express.Router();

router.post('/', workoutController.createWorkout); // Create a new workout
router.get('/', workoutController.getAllWorkouts); // Get all workouts
router.get('/:id', workoutController.getWorkoutById); // Get workout by ID
router.put('/:id', workoutController.updateWorkout); // Update workout by ID
router.delete('/:id', workoutController.deleteWorkout); // Delete workout by ID

module.exports = router;
