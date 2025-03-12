const axios = require("axios");

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

module.exports = {
  getCoordinates,
};
