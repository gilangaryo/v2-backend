// routes/authRoutes.js
const express = require('express');
const authController = require('./auth.controller.js');

const router = express.Router();

router.post('/login', authController.login);

module.exports = router;
