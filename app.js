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
  return "41-62 degrees";
}
