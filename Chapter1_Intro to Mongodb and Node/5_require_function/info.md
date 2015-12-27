Require function allows to include modules and other code from different modules in a elegant way.

	Example: var mongodb = require('mongodb');

But also you can include your own modules with the require function:

- Node.js uses file level scoping: by default any variable or function declared in a file is not accessible outside that file.

- Node.js has a global object, but using it is always a mistake. Required function is always the best way to share code between files.


There are two ways to import modules:
1. module.exports = function(){}
	Module exports is like the return value when a person calls require('myfile');

	* When you use require('./directoryName'). Node looks for index.js inside this directory.

2. export.other = require('./....')
	Export is a convenient shorthand for module.exports.
	You can only assign properties to the export variable.
