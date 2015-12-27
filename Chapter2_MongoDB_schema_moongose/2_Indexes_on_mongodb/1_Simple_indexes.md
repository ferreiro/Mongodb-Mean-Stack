### mongodb indexes

Indexes are a way to get consistent performance from your queries as your data grows.

Key to getting good performance on mongodb.

A way of mongdob to precompute the result of a query.
When there are no indexes. Mongodb will make a collection scan (searching all singles documents). But this is really expensive when data grows.

Example:

$ mongo
db.users.insert({name: 'John'})
db.users.find({name: 'John'})
db.users.createIndex({name: 1})

When creating the index, mongodb creates a datastructure (B-tree), that maps the values of the name field to documents that have that value of the name field.

So when you search again, mongodb will not need to scan all the documents, it's will read on the map.

- Let's see an example for larger datasets:

	We insert 5 million users (5.000.000) - This is a lot!!
	for(i=0;i<5000000;i++) { db.names.insert({name:' '+i}) }
	Now add Jorge to the last entry (50.001).

		db.names.insert({name:'Jorge'})

	First, we try to find jorge without an index:
		
		db.names.find({name:'Jorge'}) // This takes a little delay to print on the screen. That's because we don't have an index.

	Now, creating an index on the name. We can obtain the result faster.
		
		db.names.createIndex({name: 1})

	And try to find the name again.

		db.names.find({name:'Jorge'})

	As you can see. The result is printed faster!! 
