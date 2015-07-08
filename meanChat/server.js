// MODULES
	var http = require('http');

// SERVER
	var server = http.createServer();
		server.listen(8000);

// SOCKETS
	var io = require('socket.io').listen(server);

	io.on('connection', function (socket){

		console.log('socket connected with id: ' + socket.id);

		socket.on('userMessage', function (userMessage){
			console.log(userMessage);
			io.emit('userMessage', { 'userMessage': userMessage.userMessage } );
		});
	});