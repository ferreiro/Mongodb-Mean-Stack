
Mocha is a javascript framework to make testing on your program. You can see the full documentation on: http://mochajs.org/
	

### Installation

We can install mocha:

1. globally with (npm install -g mocha)
2. Locally on the project with npm install mocha --save
3. Or including manually on package.json:
	{
		"dependencies" : {
			"mocha" : "versionOfProgram.0.1"
		}
	}

The problem about install a module globally with npm install -g mocha is the compatibility. If some projects on your machine are using one version and you upgrade the module with a newer one, maybe some things will not work due to compatibility.

### Running mocha

To run tests, type in the terminal:
	$ ./node_modules/.bin/mocha

### npm tests

$ npm help
$ npm test --help

{
	"scripts" : {
		"test": "mocha test.js", (**)
		"test-kitten" : "mocha -R nyan test.js"
	},
	"dependencies" : {
		"mocha" : "2.2.4"
	}
}

Now you can run: 
	$ npm test (is a shortcut of npm run ____)
	$ npm run test
	$ npm run test-kitten

(**) npm is enough smart to find the binary executable of mocha to run the test. So we don't to include ./node_modules/.bin/mocha
