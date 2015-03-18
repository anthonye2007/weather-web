function App() {
}

module.exports = function createApp() {
  return new App();
};

App.prototype.getWeather = function (zip) {
  console.log("zip is " + zip);
}
