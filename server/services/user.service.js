const User = require("../models/user.model");
const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error("Failed to create user..");
  }
};

module.exports = { createUser };
