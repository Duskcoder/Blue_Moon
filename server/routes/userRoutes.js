// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.post('/register', userController.register);   
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);
// Add more routes as needed


// by venu
router.put('/update',userController.updatePassword)

module.exports = router;
