var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello world!');
});

// need to be root to run on port 80
server.listen(80);

