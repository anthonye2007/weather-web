var unirest = require('unirest');

function App() {
}

module.exports = function createApp() {
  return new App();
};

/**
 * Gets the temperature range for a given zip code on today's date.
 *
 * First checks to see if today's temp for that zip is in the cache.
 * If yes, return that temp.
 * If no, ask for that temp range from Yahoo Weather.
 */
App.prototype.getWeather = function (zip) {
  console.log("zip is " + zip);

  var url = "http://api.openweathermap.org/data/2.5/weather?q=";
  var city = 'raleigh';

  var Request = unirest.get(url + city);
  Request.end( function(response) {
    console.log("Got response from API:\n");
    var data = response.body.main;
    var max = data.temp_max;
    var min = data.temp_min;

    console.log('Max: ' + max);
    console.log('Min: ' + min);
  });

  return "41-62 degrees";
}
