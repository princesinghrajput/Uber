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
    console.log("Response getDistanceTimeService: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching distance and time: ", error);
    throw error;
  }
};


//calculate fare

const calculateFare = async (pickup, destination, vehicleType) => {
  try {
      const fareRates = {
          auto: { baseFare: 20, perKm: 5, perMinute: 1 },
          car: { baseFare: 30, perKm: 10, perMinute: 2 },
          moto: { baseFare: 15, perKm: 5, perMinute: 1 }
      };
      if (!fareRates[vehicleType]) {
          throw new Error("Invalid vehicle type");
      }
      // Step 1: Fetch distance and duration
      const { routes } = await getDistanceTime(pickup, destination);
      if (!routes || routes.length === 0) {
          throw new Error("Failed to fetch distance and duration");
      }

      const { distance, duration } = routes[0]; // Extract first route's details

      if (distance <= 0 || duration <= 0) {
          throw new Error("Invalid distance or duration values");
      }

      // Step 2: Calculate fare
      const rates = fareRates[vehicleType];
      let fare =
          rates.baseFare +
          (distance / 1000) * rates.perKm + // Convert meters to km
          (duration / 60) * rates.perMinute; // Convert seconds to minutes

      return parseFloat(Math.max(0, fare).toFixed(2)); // Ensure non-negative and round to 2 decimals
  } catch (error) {
      console.error("Error calculating fare:", error.message);
      return null; // Return null in case of failure
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
  getSuggestions,
  calculateFare
};
