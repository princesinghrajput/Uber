const Captain = require("../models/captain.models");
const captainService = require("../services/captain.service");

const registerCaptain = async (req, res) => {
  const { fullname, email, password, vehicle } = req.body;

  const hashedPassword = await Captain.hashPassword(password);

  const captain = await captainService.createCaptain({
    fullname,
    email,
    password: hashedPassword,
    vehicle,
  });

  return res.status(201).json({
    message: "Captain created successfully...",
    captain: {
      _id: captain._id,
      fullname: captain.fullname,
      email: captain.email,
      vehicle: captain.vehicle,
    },
  });
};

const loginCaptain = async (req, res) => {
  const { email, password } = req.body;

  const captain = await captainService.getCaptainByEmail(email);

  if (!captain) {
    return res.status(401).json({
      message: "Invalid email or password...",
    });
  }

  const isPasswordValid = await captain.comparePassword(password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid email or password...",
    });
  }

  const token = captain.generateJWT();

  return res.status(200).json({
    message: "Login successful...",
    token,
  });
};

const getCaptainProfile = async (req, res) => {
  const captainId = req.captain.id;

  try {
    const captain = await captainService.getCaptainById(captainId);

    return res.status(200).json({
      message: "Captain profile fetched successfully...",
      captain: {
        _id: captain._id,
        fullname: captain.fullname,
        email: captain.email,
        vehicle: captain.vehicle,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error...",
    });
  }
};

module.exports = { registerCaptain, loginCaptain, getCaptainProfile };
