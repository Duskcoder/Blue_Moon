// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');


router.post('/book', bookingController.Booking);
router.get('/customer',bookingController.customer_book)

module.exports = router;
