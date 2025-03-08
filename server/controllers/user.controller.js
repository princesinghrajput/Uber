const User = require("../models/user.model");
const { createUser, getUserByEmail, getUserById } = require("../services/user.service");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

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
  const { email, password } = req.body;

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array(),
    })
  }


  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    //compare password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    //generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


const getProfile = async(req, res)=>{
  const userId = req.body.userId;

  try{
    const user = await getUserById(userId);
    return res.status(200).json({
      message: "Profile fetched successfully",
      user:{
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      
    })
  }

  

}

module.exports = { registerUser, loginUser, getProfile };
