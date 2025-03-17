const express = require("express");
const mapsController = require("../controllers/map.controller");

const router = express.Router();



router.get('/get-coordinates', mapsController.getCoordinates);
router.get('/get-distance-time', mapsController.getDistanceTimeController);
router.get('/get-suggestions', mapsController.getSuggestionsController);
router.get('/calculate-fare', mapsController.calculateFareController);

module.exports = router;
