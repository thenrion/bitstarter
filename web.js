var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var output = '';
    fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	response.send(new Buffer(data).toString());
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
