const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    pickup:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    fare:{
        type:Number,
        required: true
    },
    vehicleType:{
        type: String,
        enum: ['auto', 'moto', 'car'],
        required: true
    },
    status:{
        type: String,
        enum:['pending', 'accepted', 'cancelled', 'completed'],
        default:'pending'
    },
    duration:{
        type: Number,
    },
    distance:{
        type: Number
    },
    otp:{
        type: String,
        required: true
    }

   }, {timestamps: true})

module.exports = mongoose.model('Ride', rideSchema);