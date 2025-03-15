const { createRide } = require("../services/ride.service");

const createRideController = async (req, res) => {
  const { pickup, destination, vehicleType, fare } = req.body;

  try {
    const ride = await createRide({
      user: req.user.userId,
      pickup,
      destination,
      vehicleType,
      fare,
    });

    return res.status(201).json({
      message: "Ride created successfully",
      ride: ride,
    });
  } catch (error) {
    console.error("Error creating ride", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  createRideController,
};
