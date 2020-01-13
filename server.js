const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const fs = require('fs');

const room1 = io.of('/room1');
const room2 = io.of('/room2');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
    
    fs.readFile('index.html', (err, content) => {
        if(err) throw err;
        res.end(content)
    })
})

io.on('connection', function(socket){
    console.log('a user connected');

    socket.emit('message de bienvenu', { msg: 'Bienvenu a toi chere utilisateur !' })

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
});

room1.on('connection', function(socket) {
    socket.on('from room1', function(data) {
        console.log('connection from room1');
        socket.emit('message', { msg: 'Bienvenu dans la Room 1 !' })
    })
})

room2.on('connection', function(socket) {
    socket.on('from room2', function(data) {
        console.log('connection from room2');
        socket.emit('message', { msg: 'Bienvenu dans la Room 2 !' })
    })
})


server.listen(3000, () => {
    console.log("server is listening")
})

