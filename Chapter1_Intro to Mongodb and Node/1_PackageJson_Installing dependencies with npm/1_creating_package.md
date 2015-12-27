
Make sure you have already installed Node.js and npm. (https://nodejs.org/en/download/)

** Remember! ** Never commit the node_modules/ (you can include inside .gitignore, the node_modules to be deleted)

1. Creating a package json.
2. $ vim package.json
3. Inside package.json, write:
	{
	        "dependencies" : {
	            "underscore" : "1.8.3"
	        }
	}
4. Install packages (in this example, underscore)
	$ npm install

5. Now we have installed packages on node_modules
	$ ls -l # To see the new directory

6. $ vim index.js

	var _ = require('underscore');

	_.each([1,2,3], function(v) {
	        console.log(v);
	})

7. Run the example node index.js
