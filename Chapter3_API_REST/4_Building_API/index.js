var express = require('express');
var wagner = require('wagner-core'); // http://stefanoricciardi.com/2011/11/08/dependency-injection-for-dummies/

require('./models')(wagner);

var app = express();

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!')