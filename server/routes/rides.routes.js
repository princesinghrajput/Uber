const express = require("express");
const rideController = require("../controllers/ride.controller");
const { authUserMiddleware } = require("../middleware/auth.middleware");


const router = express.Router();

router.post('/create-ride',authUserMiddleware, rideController.createRideController)


module.exports = router;
