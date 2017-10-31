const express = require('express');
const compression = require('compression');
const app = express();

// use comppression
app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

var port = process.env.PORT || 8080
app.listen(port);
console.info('Server at http://0.0.0.0:' + port + '/');

