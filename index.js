var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

    console.log('a user connected');

    socket.on('draw', function(msg) {
        console.log('drawing', msg);
        socket.broadcast.emit('draw', msg);
    });

    socket.on('disconnect', function () {
        console.log('a user disconnected');
    });

});

http.listen(port, function () {
    console.log('listening on *:3000');
});

