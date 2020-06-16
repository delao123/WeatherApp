const request = require('request');

const geocode = (address, callback) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) 
                + ".json?limit=1&access_token=pk.eyJ1IjoiZGVsYW8xMjMiLCJhIjoiY2thdGFjdTVmMGF6YTMzbGtmYmJzZTA1YyJ9.oyiAtpwv20KAu0QfaNlNrw";
    request( {url, json:true }, (error,{ body }) =>{
        if(error){
            callback("Connection no found", undefined);
        }else if(body.features.length === 0){
            callback("City doesn't exist", undefined);
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                city: body.features[0].place_name
            });
        }
    });    
};

module.exports = geocode;