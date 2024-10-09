const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
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

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => console.error(error));
//aaaaaa