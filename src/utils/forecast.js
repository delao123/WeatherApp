const request = require('request');


const forecast = (longitude, latitude, callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=bf458a0d3770e8ac949233ff762646a7"+
    "&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude);
    request( { url, json:true }, (error, { body }) =>{
        const weather_descriptions = body.current.weather_descriptions[0];
        const temperature = body.current.temperature;
        const feelslike = body.current.feelslike;
        const time = body.location.localtime;
        const humidity = body.current.humidity;
        const visibility = body.current.visibility;

        if(error){
            callback("Can not connected with API", undefined);
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            callback(undefined,{
                message: "Today at " + time + " The weather is: " + weather_descriptions + ", and currently: " 
                        + temperature + " degrees out with " + humidity + "% humidity and "
                        + visibility + " visibility, but It's feels like " + feelslike + " degrees out"

            });  
        }
    });
}

module.exports = forecast;