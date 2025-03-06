const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();


router.post('/register', userController.registerUser);
// router.post('/login', loginUser);


module.exports = router;