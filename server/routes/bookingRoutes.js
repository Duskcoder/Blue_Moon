// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');


router.post('/book', bookingController.Booking);


module.exports = router;
