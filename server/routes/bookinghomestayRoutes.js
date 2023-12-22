// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const BookingHomeStay=require('../controllers/bookinghomestaycontroller')



router.post('/bookhomestay', BookingHomeStay.BookingHomeStay);
router.get('/customerhomeestay',BookingHomeStay.customer_bookHomestay)

module.exports = router;
