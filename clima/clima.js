const axios = require('axios');

const getClima = async (lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=bfce5a6b5e6bf7763700317401cdd9c9&units=metric`);

    return response.data.main.temp;
}

module.exports = {
    getClima
}