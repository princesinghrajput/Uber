const express = require("express");
const userController = require("../controllers/user.controller");
const { validateRegister, validateLogin } = require("../middleware/validation.middleware");
const { authUserMiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/register",validateRegister, userController.registerUser
);
router.post('/login',validateLogin, userController.loginUser );

router.get('/profile', authUserMiddleware, userController.getProfile);

module.exports = router;
