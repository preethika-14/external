const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controller/locations.js');
const ctrlOthers = require('../controller/others.js');

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location3', ctrlLocations.locationInfo3);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/about', ctrlOthers.about);

module.exports = router;
