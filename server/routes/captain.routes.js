const express = require("express");
const captainController = require("../controllers/captain.controller");

const router = express.Router();

router.post(
  "/register", captainController.registerCaptain
);

router.post("/login", captainController.loginCaptain);

module.exports = router;
