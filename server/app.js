const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world.....");
});

module.exports = app;
