const express = require('express');
const goalController = require('../controllers/goalController');
const router = express.Router();

router.post('/users/:user_id/goals', goalController.createGoal); // Create a new goal
router.get('/users/:user_id/goals', goalController.getUserGoals); // Get a goals user
router.get('goals/', goalController.getAllGoals); // Get all goals
router.get('goals/:id', goalController.getGoalById); // Get goal by ID
router.put('goals/:id', goalController.updateGoal); // Update goal by ID
router.delete('goals/:id', goalController.deleteGoal); // Delete goal by ID

module.exports = router;
