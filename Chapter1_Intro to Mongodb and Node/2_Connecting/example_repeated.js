var   mongodb = require('mongodb')
	, MongoClient = mongodb.MongoClient
	, url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
	
	if (err) {
		console.log("Error connecting Database")
		process.exit(1);
	}

	db.collection('documents').insert({ 
		name: 'Jorge',
		surname: 'Ferreiro'
	}, function(err, result) {
		if (err) {
			console.log('Trying to inserting... ' + err);
			process.exit(1);
		}
		console.log(result);
		process.exit(0);
	});
});

