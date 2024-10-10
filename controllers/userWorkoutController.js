const User = require('../models/user');
const UserWorkout = require('../models/userWorkout');
const Workout = require('../models/workout');

// Create a new user workout
exports.createUserWorkout = async (req, res) => {
    try {
        //user
        const user = await User.findByPk(req.params.user_id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        //workout
        const workout = await Workout.findByPk(req.params.workout_id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        //user workout
        const userWorkout = await user.createUserWorkout(req.body);
        const userWorkoutType = await workout.createUserWorkout(req.body);
            res.status(201).json({ 
                message: 'Your workout successfully created', 
                userWorkout: userWorkout,
                userWorkoutType: userWorkoutType
            });
    } catch (err) {

        res.status(500).json({ error: err.message });
    }
};
//get a user workout history
exports.getUserWorkouts = async (req, res) => {
    try {
        const userWorkout = await UserWorkout.findAll({ where: { user_id: req.params.user_id } });
        if (userWorkout.length > 0) {
            res.status(200).json(userWorkout);
        } else {
            res.status(404).json({ message: 'No workout history found for this user' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//get a workout in user history
exports.getUserWorkoutsName = async (req, res) => {
    try {
        const userWorkoutName = await UserWorkout.findAll({ where: { workout_id: req.params.workout_id } });
        if (userWorkoutName.length > 0) {
            res.status(200).json(userWorkoutName);
        } else {
            res.status(404).json({ message: 'No user found for this workout' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
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
            //res.status(200).json(updatedUserWorkout);
            res.status(200).json({ 
                message: 'Your workout successfully updated', 
                userWorkout: updatedUserWorkout });
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
            //res.status(204).send();
            res.status(200).json({
                message: 'Your workout successfully deleted' });
        } else {
            res.status(404).json({ message: 'User workout not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
