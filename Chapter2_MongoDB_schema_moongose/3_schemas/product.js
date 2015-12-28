var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

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
			required: true,
			set: function(v) {
				// V is the new price you pass
				this.internal.approximatePriceUSD = v/(fx()[this.price.currency] || 1); // Llama a fx.js y coge el valor de la moneda actual. Entonces divide el precio que pasas entre el valor de la moneda actual
				return v:
			}
		},
		currency: {
			type: String,
			enum: ['EUR', 'USD', 'GBP'],
			required: true,
			set: function(v) {
				this.internal.approximatePriceUSD = this.price.amount / (fx()[v] || 1);
				return v;
			}
		}
	},
	category: Category.categorySchema,
	internal: {
		approximatePriceUSD: Number
	}
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