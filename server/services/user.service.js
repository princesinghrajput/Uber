const User = require("../models/user.model");
const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error("Failed to create user..");
  }
};

const getUserByEmail = async(email)=>{
  try{
    const user = await User.findOne({email})
    return user;
  } catch (error) {
    throw new Error("Failed to get user by email..");
  }
}

const getUserById = async(userId)=>{
  try{
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error("Failed to get user by id..");
  }
}

module.exports = { createUser , getUserByEmail, getUserById};
