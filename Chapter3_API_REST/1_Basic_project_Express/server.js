var express = require('express');

module.exports = function() {
	var app = express();

	app.get('/', function(req, res){
		res.send('Hello World!!!');
	});

	app.get('/user/:name', function(req, res){
		res.send('Hello ' + req.params.name + '. Your option is: ' + req.query.option);
	});

	return app;
};