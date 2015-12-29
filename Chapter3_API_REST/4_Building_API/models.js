var mongoose = require('mongoose');

module.exports = function(wagner) {
	mongoose.connect('mongodb://localhost:27017/test');

	var categorySchema = require('./category');
	var Category = mongoose.model('Category', categorySchema, 'categories');

	// Register a service on wagner
	wagner.factory('Category', function() {
		return Category;
	});

	return {
		Category: Category
	};
};