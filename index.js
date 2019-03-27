var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  console.log('Hola github amigo!');
  console.log('I see your hola and raise you a wowsa!');
  console.log('Enn ein breytingin, Sveas yfir og ut!');
  socket.on('disconnect', function(){
  	console.log('a user has disconnected');
  });
  socket.on('chat message', function(msg){
  	//console.log('a user wrote: '+msg);
  	io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
