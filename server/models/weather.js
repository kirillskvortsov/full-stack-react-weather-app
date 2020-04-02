const request = require('request-promise');

const API_KEY = '138e2516a5f548d0e201e8e9b2be5953';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({error: 'Could not reach OpenWeatherMap API.'});
        });
    }
}

module.exports = Weather;