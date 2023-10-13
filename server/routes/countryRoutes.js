const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/country_code',countryController.country);

module.exports = router;