var express = require('express');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv,{});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

serv.listen(1001);
console.log("Serwer wlaczony");

io.sockets.on('connection', function (socket) {
    console.log('klient podlaczony')
}
