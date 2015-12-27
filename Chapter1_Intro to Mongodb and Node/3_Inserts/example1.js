var 	  mongodb = require('mongodb')
	, MongoClient = mongodb.MongoClient
	, url = 'mongodb://localhost:27017/example';
 
MongoClient.connect(url, function(err, db) {
	console.log(err)
	if (err) {
		console.log(err);
		process.exit(1);
	}
	
	// Creating json object to insert into
	// our database

	doc = {
		name : 'Jorge',
		email : 'me@jgferreiro.com',
		color : 'black',
		city: 'Unknon'
	}

	db.collection('users').insert(doc,function(err, data) {
		if (err) { 
			console.log(err);
			process.exit(0);
		}

		// Instead of using find().toArray, we have only put find() {}
		// the program will give us a cursor instead of an array of docs.

		db.collection('users').find().toArray(function(err, docs) {
			if (err) {
				console.log(err);
				process.exit(1)		
			}
			console.log('Found docs');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			})
			process.exit(0);
		});
	})
});
