const axios = require("axios");
const {getDistanceTime} = require("../services/maps.service");

const getCoordinates = async (req, res) => {
  const { address } = req.query;
  console.log("Address: ", address);

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          format: "json",
          q: address,
        },
      }
    );

    return res.json({
      latitude: response.data[0].lat,
      longitude: response.data[0].lon,
      address: response.data[0].display_name,
    });
  } catch (error) {
    console.error("Error fetching data from Nominatim:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getDistanceTimeController = async (req, res) =>{

  const {origin , destination} = req.query;
  const distanceTime = await getDistanceTime(origin, destination);
  const distance = distanceTime.routes[0].distance;
  const duration = distanceTime.routes[0].duration;

  return res.status(200).json({
    distance:{
      text: distance,
      value: distance
    },
    duration:{
      text: duration,
      value: duration
    }
  });

}
module.exports = {
  getCoordinates,
  getDistanceTimeController
};
