const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const userWorkoutRoutes = require('./routes/userWorkoutRoutes');
const goalRoutes = require('./routes/goalRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/workouts', workoutRoutes);
app.use('/user-workouts', userWorkoutRoutes);
app.use('/goals', goalRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Failed to sync database: ', err);
    });
//aaaaaa