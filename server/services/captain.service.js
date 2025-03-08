const Captain = require("../models/captain.models");


const createCaptain = async(captainData)=>{
    try{
        const captain= await Captain.create(captainData);
        return captain;
    } catch(error){
        throw new Error(error);
    }
}

const getCaptainByEmail = async(email)=>{
    try{
        const captain = await Captain.findOne({email});
        return captain;
    } catch(error){
        throw new Error(error);
    }
}

module.exports = {
    createCaptain,
    getCaptainByEmail
}
