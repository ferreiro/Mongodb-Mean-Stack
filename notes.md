### Mongodb installation

** See online documentation to install ** https://docs.mongodb.org/manual/installation/

* Install homebrew...
1- https://www.mongodb.org/downloads
2- Copy the tgz url (Ex: https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.0.tgz)
3- In terminal:
	$ wget https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.0.tgz
	$ tar filename.tgz
	$ echo $PATh
	$ sudo ln - linkToMong/bin/mongod /user/local/bin/mongod
	$ mongod --version
	$ mongod --dbpath ~/data/db

	~ == Tilde Symbol (https://discussions.apple.com/thread/2803856?tstart=0)
	Teclado en español: (Alt + Ñ)
	Teclado en ingles: (Alt + N)

### Creating a simple document on mongo
1. Create a folder to save your database
	$ mkdir databaseName/
2. Run a server with mongod
	$ mongod --dbpath databaseName/
3. In other terminal, open the mongo shell:
	$ mongo
4. Insert a document:
	$ db.test.insert({ name: 'jorge' })
5. Test to find one field:
	$ db.test.findOne({ name: 'Jorge' })

	// "test" is the default database that mongo uses.


#### NPM

$ npm help

