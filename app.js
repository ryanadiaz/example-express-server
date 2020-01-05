// Dependencies
var http = require("http");
var PORT = 3000;
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var path = req.url;
}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});