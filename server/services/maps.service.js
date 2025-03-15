const axios = require("axios");

const getCoordinates = async (address) => {
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json&limit=1`;

    const response = await axios.get(url);
    if (response.data.length === 0) {
      throw new Error("No coordinates found for the given address");
    }

    return {
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    };
  } catch (error) {
    console.error("Error fetching coordinates: ", error);
    throw error;
  }
};

const getDistanceTime = async (origin, destination) => {
  try {
    const originCoordinates = await getCoordinates(origin);
    const destinationCoordinates = await getCoordinates(destination);

    const url = `https://router.project-osrm.org/route/v1/driving/${originCoordinates.lon},${originCoordinates.lat};${destinationCoordinates.lon},${destinationCoordinates.lat}?overview=false`;
    const response = await axios.get(url);
    if (response.data.code !== "Ok") {
      throw new Error("Error fetching distance and time");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching distance and time: ", error);
    throw error;
  }
};

const getSuggestions = async (input) =>{
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&limit=10`
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching suggestions: ", error);
    throw error;
  }

}

module.exports = {
  getDistanceTime,
  getSuggestions
};
