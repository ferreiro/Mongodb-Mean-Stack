
/*
	http://mochajs.org/
	
	If I run mocha -g "works" it will run the tests that matched the pattern.
	So in this case (it('works', function() {});) and (it('sorts works', function() {});)
*/

describe('my feature', function() {
	it('works', function() {});
	it('fails gracefully', function() {})
});

describe('my other feature', function() {
	it('sorts works', function() {});
})
