const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/authToken');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/all' , userController.all);

// Protected route
router.get('/userInfo', verifyToken, userController.userInfo);

// Root route
router.get('/', (req, res) => {
    res.send("Hola Amigo, user Service running on port 3001.");
});

module.exports = router;
