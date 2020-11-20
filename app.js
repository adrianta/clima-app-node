const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.71, -74.01)
//     .then(console.log);

const getInfo = async ( direccion ) => {
    try {
        const { city, lat, lng } = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(lat, lng);

        return `El clima de ${ city } es de ${ temp }`;
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${ direccion }`);
    }
}

getInfo( argv.direccion )
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Error: ', err);
    });