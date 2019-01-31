const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7a96a47a43c52a3e8b7ca3cf13bfedc1`);

    //   if (resp === '404') {
    //       throw new Error('Error al obtener el clima', resp);
    //   }

    return resp.data.main.temp;


}

module.exports = {
    getClima
}