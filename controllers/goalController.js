const Goal = require('../models/goal');

// Create a new goal
exports.createGoal = async (req, res) => {
    try {
        const goal = await Goal.create(req.body);
        res.status(201).json(goal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all goals
exports.getAllGoals = async (req, res) => {
    try {
        const goals = await Goal.findAll();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single goal by ID
exports.getGoalById = async (req, res) => {
    try {
        const goal = await Goal.findByPk(req.params.id);
        if (goal) {
            res.status(200).json(goal);
        } else {
            res.status(404).json({ message: 'Goal not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a goal by ID
exports.updateGoal = async (req, res) => {
    try {
        const [updated] = await Goal.update(req.body, {
        where: { goal_id: req.params.id }
        });
        if (updated) {
        const updatedGoal = await Goal.findByPk(req.params.id);
            res.status(200).json(updatedGoal);
        } else {
            res.status(404).json({ message: 'Goal not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a goal by ID
exports.deleteGoal = async (req, res) => {
    try {
        const deleted = await Goal.destroy({
        where: { goal_id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Goal not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
