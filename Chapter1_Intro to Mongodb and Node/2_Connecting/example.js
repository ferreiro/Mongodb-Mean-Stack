var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri, function(error, db) {
	if (error) {
		console.log(error);
		process.exit(1);
	}

	db.collection('sample').insert({ x: 100}, function (error, result) {
		if (error) {
			console.log(error);
			process.exit(1);	
		}
		
		
		db.collection('sample').find().toArray(function(error, docs) {
			if (error) { 
				process.exit(1);
				console.log(error)
			 };

			 console.log('Element inserted!!!!');
			 console.log(docs);
			 process.exit(0);	
		})

	});
});
