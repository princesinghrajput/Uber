const Ride = require("../models/rides.models");
const crypto = require("crypto");

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const createRide = async ({ user, pickup, destination, vehicleType, fare }) => {
  const ride = await Ride.create({
    user,
    pickup,
    destination,
    vehicleType,
    fare,
    otp: generateOTP(),
  });

  return ride;
};

module.exports = {
  createRide,
};
