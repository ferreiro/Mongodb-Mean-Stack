var mongoose = require('mongoose')
	, schema = require('./schema.js');

mongoose.connect('mongodb://localhost:27017/test2');

// Creating a model. Parameters: model name, schema, collection name
var User = mongoose.model('User', schema, 'users'); 

// Creating a document of user type
var user_john = new User({
	name : 'John Smith',
	email : 'john@smith.io'
})

user_john.save(function(err) {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	User.find({ email: 'john@smith.io'}, function(err, docs) {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	})
})