const User = require("../models/user.model");
const {createUser} = require("../services/user.service");

const registerUser = async (req, res) => {
  //TODO: Implement the register user controller

  const { fullname, email, password } = req.body;
  const hashedPassword = await User.hashPassword(password);

  const user = await createUser({
    fullname,
    email,
    password: hashedPassword,
  });

  return res.status(201).json({
    message: "User created successfully...",
    user,
  });
};

const loginUser = async (req, res) => {
  //TODO: Implement the login user controller
};

module.exports = { registerUser };
