const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/users', userController.createUser); // Create a new user
router.get('/users/', userController.getAllUsers); // Get all users
router.get('/users/:id', userController.getUserById); // Get user by ID
router.put('/users/:id', userController.updateUser); // Update user by ID
router.delete('/users/:id', userController.deleteUser); // Delete user by ID

module.exports = router;
