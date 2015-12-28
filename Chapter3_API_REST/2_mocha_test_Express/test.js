var app = require('./server');
var assert = require('assert');
var superagent = require('superagent');
var port = 3000;

describe('Server: testing server runs correctly', function() {
	var server;

	beforeEach(function() {
		server = app().listen(port);
	});

	afterEach(function() {
		server.close;
	})

	it('Hello world is printed correctly', function(done) {
		superagent.get('http://localhost:3000', function(err, res) {
			assert.ifError(err)
			assert.equal(200, res.status);
			assert.equal("Hello, world", res.text);
			done(); // tell mocha the test has done
		})
	});
});