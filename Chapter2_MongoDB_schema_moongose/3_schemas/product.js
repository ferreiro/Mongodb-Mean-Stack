var mongoose = require('mongoose');
var Category = require('./category');

var productSchema = {
	name: {
		type: String,
		required:true
	},
	pictures: [{
		type: String,
		match: /^http:\/\//i
	}],
	price: {
		amount: {
			type: Number,
			required: true
		},
		currency: {
			type: String,
			enum: ['EUR', 'USD', 'GBP'],
			required: true
		}
	},
	category: Category.categorySchema
};

var schema = new mongoose.Schema(productSchema);

/**** 
	Creating one virtual:
	A virtual is a cool feature from Mongoose that
	allows to join different properties and returns one.

	Example: Instead of asking name and surname. Mongoose can return you the 
	full name in one query.
*****/

var currencySymbols = {
	'EUR':'€',
	'USD':'$',
	'GBP':'£'
}

schema.virtual('displayPrice').get(function(){
	return this.price.amount + currencySymbols[this.price.currency]; // add currency
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

module.exports = schema;

/*
module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;
*/