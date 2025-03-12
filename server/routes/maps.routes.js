const express = require("express");
const mapsController = require("../controllers/map.controller");

const router = express.Router();



router.get('/get-coordinates', mapsController.getCoordinates);

module.exports = router;
