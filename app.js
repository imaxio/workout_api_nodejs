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
app.use('/api', userRoutes);
app.use('/api', workoutRoutes);
app.use('/api', userWorkoutRoutes);
app.use('/api', goalRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => console.error('Unable to connect to the database:', error));
//aaaaaa