const express = require("express");
const captainController = require("../controllers/captain.controller");
const { authCaptainMiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/register", captainController.registerCaptain
);

router.post("/login", captainController.loginCaptain);

router.get("/profile",authCaptainMiddleware, captainController.getCaptainProfile);

module.exports = router;
