var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/*
io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('chat message', function(msg) {
        console.log('chat message', msg);
        socket.broadcast.emit('send message', msg);
    });

    socket.on('disconnect', function () {
        console.log('a user disconnected');
    });
});
*/

http.listen(3000, function () {
    console.log('listening on *:3000');
});
