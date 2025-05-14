const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/rides.routes');
const bodyParser = require("body-parser");
const cors = require('cors');



const app = express();

app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}))

connectDB();


app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);
app.use('/api/maps', mapRoutes);
app.use('/api/rides', rideRoutes)


module.exports = app;
