const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error connecting to MongoDB", err);
    })
}

module.exports = connectDB;