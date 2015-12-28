/*
	- id (category name)
	- parent (parent category)
	- ancestors
	
	Category = {
		_id = Electronics,
		parent = none,
		ancestors = [
			'Mobiles',
			'Tvs',
			'Tablets'
		]
	}
*/

var mongoose = require('mongoose');

var categorySchema = {
	_id: {
		type: String
	},
	parent: {
		type: String,
		ref: 'Category' // Population: http://mongoosejs.com/docs/populate.html
	},
	ancestors: [{
		type: String,
		ref: 'Category' // Population: http://mongoosejs.com/docs/populate.html
	}]
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;
