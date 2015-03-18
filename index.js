var express = require('express');
var weatherModule = require('./app');
var app = express();
var weather = weatherModule();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(request, response) {
  response.send('Hello World!!');
});

app.post('/', function(request, response) {
  var zip = request.body.zip;
  response.send('You just posted -- zip: ' + zip);
  weather.getWeather(zip);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
