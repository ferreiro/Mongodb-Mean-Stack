var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

var userSchema = new mongoose.Schema({
	name: String
});
var User = mongoose.model('User', userSchema);

myUserFunction(User);

function myUserFunction(User) {
	User.create({ name: 'Jorge' }, function(err, doc) {
		if (err) {
			process.exit(1);
		}
		console.log(require('util').inspect(doc));
		process.exit(0)
	});
}