var mongoose = require('mongoose');

module.exports = function(wagner) {
	mongoose.connect('mongodb://localhost:27017/test');

	var Category = 
		mongoose.model('Category', require('./category'), 'categories');
	var Product = 
		mongoose.model('Product', require('./product'), 'products');

	var models = {
		Category: Category,
		Product: Product
	};

	// To ensure DRY-ness, register factories in a loop

	_.each(models, function(value, key) {
		wagner.factory(key, function() {
			return value; // register category service wiyh wagner
		});
	});

	/*	
	Before using the loop
	wagner.factory('Category', function() {
		return Category; // register category service wiyh wagner
	});
	*/

	return models
	/*
	return {
		Category: Category
	};
	*/
};