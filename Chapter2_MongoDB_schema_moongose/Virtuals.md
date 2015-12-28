virtuals: properties that are computed from another properties.
So when you ask something, is composed from other properties

	Example:
	Mongodb
		_id:
			firstName
			lastName
		
		|
		|
		|
		v

	Mongoose
		fullName


### Good explained here!
Font: https://futurestud.io/blog/understanding-virtuals-in-mongoose
---

Virtuals are additional fields for a given model. Their values can be set manually or automatically with defined functionality. A common virtual property is the full name of a person, composed of user’s first and last name.

**Keep in mind:** virtual properties don’t get persisted in the database. They only exist logically and are not written to the document’s collection.

#### Mongoose Schema
We’ll use the user schema below for further examples. The user schema has two properties indicating the user’s first and last name: first and last.

	// define user schema
	var userSchema = new Schema({
	    first: String,
	    last: String
	});

	// compile our model
	var User = mongoose.model('User', userSchema);

	// create a document
	var mentalist = new User({
	    first: 'Patrick',
	    last: 'Jane'
	});

Assume we want to get the full name of mentalist, we can do this manually appending the first to last propery:

console.log(mentalist.first + ' ' + mentalist.last); // Patrick Jane
Define a Virtual Property
Actually, there is a better way of getting the full name of a user: virtual fields. With virtuals, you benefit of writing the name concatenation mess only once.

Mongoose splits the definiton of virtual fields into GET and SET methods.

#### Get Method
The virtuals get method is a function returning a the virtual value. You can do complex processing or just concatenate single document field values.

	userSchema.virtual('fullname').get(function() {
	    return this.first + ' ' + this.last;
	});

The code example above just concatenates the first and last property values. With that, the virtual fullname property now will print the same output as above:

console.log(mentalist.fullname); // Patrick Jane
Set Method
setter methods are useful to split strings or do other operations. Define a virtual setter by passing a proper function and execute your desired processing. The example below splits the passed name variable at any whitespace.

	userSchema.virtual('fullname').set(function (name) {
	  var split = name.split(' ');
	  this.first = split[0];
	  this.last = split[1];
	});

The first part of name is assigned to the first and the second part to the last property. This set method will override the previous model values and assign the ones we pass as fullname property.

	var humor = new User({
	    first: '',
	    last: ''
	});

	humor.fullname = 'Kimball Cho';
	console.log(humor.first); // Kimball
	console.log(humor.last);  // Cho

#### Queries and Field Selection

Virtuals are NOT available for document queries or field selection. Only non-virtual properties work for queries and field selections