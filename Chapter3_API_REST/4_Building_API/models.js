var mongoose = require('mongoose');

module.exports = function(wagner) {
	mongoose.connect('mongodb://localhost:27017/test');

	var categorySchema = require('./category');
	var Category = mongoose.model('Category', categorySchema, 'categories');

	wagner.factory('Category', function() {
		return Category; // register category service wiyh wagner
	});

	return {
		Category: Category
	};
};