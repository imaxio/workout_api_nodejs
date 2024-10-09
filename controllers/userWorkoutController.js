const UserWorkout = require('../models/userWorkout');

// Create a new user workout
exports.createUserWorkout = async (req, res) => {
    try {
        const userWorkout = await UserWorkout.create(req.body);
        res.status(201).json(userWorkout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all user workouts
exports.getAllUserWorkouts = async (req, res) => {
    try {
        const userWorkouts = await UserWorkout.findAll();
        res.status(200).json(userWorkouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single user workout by ID
exports.getUserWorkoutById = async (req, res) => {
    try {
        const userWorkout = await UserWorkout.findByPk(req.params.id);
        if (userWorkout) {
            res.status(200).json(userWorkout);
        } else {
            res.status(404).json({ message: 'User workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user workout by ID
exports.updateUserWorkout = async (req, res) => {
    try {
        const [updated] = await UserWorkout.update(req.body, {
        where: { user_workout_id: req.params.id }
        });
        if (updated) {
        const updatedUserWorkout = await UserWorkout.findByPk(req.params.id);
            res.status(200).json(updatedUserWorkout);
        } else {
            res.status(404).json({ message: 'User workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user workout by ID
exports.deleteUserWorkout = async (req, res) => {
    try {
        const deleted = await UserWorkout.destroy({
        where: { user_workout_id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'User workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
