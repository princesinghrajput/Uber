const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema(
  {
    fullname: {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
      },
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    vehicle: {
      color: {
        type: String,
        required: true,
      },
      plate: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
      vehicleType: {
        type: String,
        required: true,
      },
    }
  },
  { timestamps: true }
);

captainSchema.methods.generateJWT = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  };
  
  captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };
  
  captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  const Captain = mongoose.model("Captain", captainSchema);

  module.exports = Captain;
