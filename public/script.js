var socket = io('http://localhost:3000');
var bouton = document.querySelector('#btn');
var msg = document.querySelector('#message');
var choice = document.querySelector('#channel');



var room1 = io('/room1');
    room2 = io('/room2');

/* socket.on('connect', function () {
    room1.emit('message', 'message pour la room 1');
}); */

socket.on('message de bienvenu', function (data) {
    
    console.log(data.msg)
});

$('#btn').click(function (e) { 
    e.preventDefault();
    let channel = $('#channel')[0].value;
    if("room1" === channel) {
        room1.emit('from room1')
    }

    if("room2" === channel) {
        room2.emit('from room2')
    }
});

room1.on('message', function(msg) {
    console.log(msg)
});

room2.on('message', function(msg) {
    console.log(msg)
})



/* 
room1.on('message', function () {
    room1.emit('message', 'message pour la room 1');
});

room2.on('message', function () {
    room2.emit('message', 'message pour la room 2');
}); */