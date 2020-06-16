const request = require('request');


const forecast = (longitude, latitude, callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=bf458a0d3770e8ac949233ff762646a7"+
    "&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude);
    request( { url, json:true }, (error, { body }) =>{
        if(error){
            callback("Can not connected with API", undefined);
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            callback(undefined,{
                message: " " + body.current.weather_descriptions[0] + ". It's currently:" + body.current.temperature + " degrees out and It's feels like " + body.current.feelslike + " degrees out"
            });  
        }
    });
}

module.exports = forecast;