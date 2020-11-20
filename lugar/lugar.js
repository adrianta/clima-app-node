const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {
    const encodedUrl = encodeURI(direccion);

    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=bfce5a6b5e6bf7763700317401cdd9c9`
    });

    const response = await instance.get();

    if (response.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let { name, coord } = response.data;

    return {
        city: name,
        lat: coord.lat,
        lng: coord.lon
    }
}

module.exports = {
    getLugarLatLng
}