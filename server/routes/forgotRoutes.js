// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const forgotController = require('../controllers/forgetController');
const otpVerify=require('../controllers/otpVerify')


router.post('/forgot', forgotController.forgot);
router.post('/otpVerify/:id',otpVerify.verifyOtp)
// Add more routes as needed

module.exports = router;
