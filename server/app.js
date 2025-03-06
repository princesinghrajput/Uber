const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const bodyParser = require("body-parser");

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);


module.exports = app;
