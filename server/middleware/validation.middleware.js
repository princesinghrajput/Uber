const { body } = require("express-validator");

const validateRegister = [
    body("email").isEmail().withMessage("Invalid email address..."),
    body("fullname.firstname")
      .notEmpty()
      .withMessage("First name is required..."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least of 8 characters..."),
  ]

const validateLogin =[
    body('email').isEmail().withMessage("Invalid email address..."),
    body('email').notEmpty().withMessage("Email is required..."),
    body('password').notEmpty().withMessage("Password is required...")
    
]

  module.exports = {validateRegister, validateLogin};