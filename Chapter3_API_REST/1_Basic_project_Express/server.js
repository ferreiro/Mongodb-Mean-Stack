var express = require('express');

module.exports = function() {
	var app = express();

	app.get('/', function(req, res) {
		res.send('Hello World!');
	});

	app.get('/user/:user', function(req, res) {
		res.send('Page for user ' + req.params.user + ' and the option is ' + req.query.option);

	});

	return app;
};