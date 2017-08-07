/*
var http = require('http');

var options = {
	host: 'www.random.org',
	path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
}

callback = function(response){
	var str = '';

	response.on('data', function(chunk){
		str += chunk;
	});

	response.on('end', function(){
		console.log(str);
	})
}


http.request(options, callback).end()


var http = require('http');

var options = {
	host: 'www.nodejitsu.com',
	path: '/',
	port: 1337,
	method: 'POST'
}

callback = function(response){
	var str = '';
	response.on('data', function(chunk){
		str += chunk;
	})

	response.on('end', function(){
		console.log(str);
	})
}

var req = http.request(options, callback)
req.write('hello world');
req.end();

*/







