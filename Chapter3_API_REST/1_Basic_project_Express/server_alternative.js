/**
* For testing is better to use the other option (server.js)
*/

var express = require('express');
var port = 3000;

app = express();

app.get('/', function(req, res){
	res.send('Hello World!!!');
});

app.get('/user/:name', function(req, res){
	res.send('Hello ' + req.params.name + '. Your option is: ' + req.query.option);
});

app.listen(port);
console.log('Server on 127.0.0.1:' + port);