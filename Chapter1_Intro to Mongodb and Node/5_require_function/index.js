var fn = require('./myFile.js');
fn();

var otherFn = require('./test').other; /* Equals as require('./test/index.js') */
otherFn();