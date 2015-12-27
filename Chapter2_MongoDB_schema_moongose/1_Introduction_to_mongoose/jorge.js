var mongoose = require('mongoose')
	, schema = require('./schema.js');

mongoose.connect('mongodb://localhost:27017/test')

// Creating the model
var User = mongoose.model('User', schema, 'users');

// Create a new document (instance of a model).

var jorge = new User({
	name : 'Jorge',
	email: 'me@jgferreiro.com'
});

jorge.save(function(err) {
	if (err) {
		console.log(err)
		process.exit(1);
	}
	console.log ('User saved!');
	User.find({ email: 'me@jgferreiro.com' }, function(err, docs) {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(docs);
		process.exit(0)
	})
})
