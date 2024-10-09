const Workout = require('../models/workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single workout by ID
exports.getWorkoutById = async (req, res) => {
    try {
        const workout = await Workout.findByPk(req.params.id);
        if (workout) {
            res.status(200).json(workout);
        } else {
            res.status(404).json({ message: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a workout by ID
exports.updateWorkout = async (req, res) => {
    try {
        const [updated] = await Workout.update(req.body, {
        where: { workout_id: req.params.id }
        });
        if (updated) {
            const updatedWorkout = await Workout.findByPk(req.params.id);
            res.status(200).json(updatedWorkout);
        } else {
            res.status(404).json({ message: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a workout by ID
exports.deleteWorkout = async (req, res) => {
    try {
        const deleted = await Workout.destroy({
        where: { workout_id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
