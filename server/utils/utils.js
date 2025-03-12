
const metreToKilometer = (distance) =>{
    return distance / 1000;
}

module.exports = {
    metreToKilometer
}


const convertTime = (duration)=>{
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
}

module.exports = {
    metreToKilometer,
    convertTime
}