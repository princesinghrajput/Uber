const express = require("express");
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email address..."),
    body("fullname.firstname")
      .notEmpty()
      .withMessage("First name is required..."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least of 8 characters..."),
  ],

  userController.registerUser
);
// router.post('/login', loginUser);

module.exports = router;
