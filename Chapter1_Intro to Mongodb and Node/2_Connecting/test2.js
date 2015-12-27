var mongodb = require('mongodb')
   , MongoClient = mongodb.MongoClient
   , url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log(err);
		process.exit(1)	
	}

	db.collection('documents').insert({
		name : 'Jorge',
		email : 'me@jgferreiro.com'
	}, function(err, result) {
		if (err) {
			console.log(err);
			process.exit(1);
		}	
		console.log(result);
		console.log("InsertedCount: " + result.insertedCount);
		// console.log("Document: " + result.ops[0].name);
		// console.log("Document: " + result.ops[0].email);
		process.exit(0);
	});
});
