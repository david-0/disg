var express = require('express');
var app = express();
var compression = require('compression');
var http = require('http').Server(app);
//var io = require('socket.io')(http, {origins: 'http://localhost:4200'});
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

var messages = [];

io.on('connection', function (socket) {
  socket.on('add', function (msg) {
    messages.push(msg);
    io.emit('messages', messages);
  });
  socket.on('clear', function (msg) {
    messages = [];
    io.emit('messages', messages);
  });
  socket.on('getAll', function (msg) {
    io.emit('messages', messages);
  });
  socket.on('remove', function (msg) {
    var index = messages.indexOf(msg);
    if (index >= 0) {
      messages.splice(index, 1);
      /*    messages = messages.filter(function (e) {
            return e !== msg
          })*/
      io.emit('messages', messages);
    }
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
