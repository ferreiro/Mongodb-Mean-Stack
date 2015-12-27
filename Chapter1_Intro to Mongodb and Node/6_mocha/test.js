/*

	http://mochajs.org/
	
	To run the test, type in the terminal:
	./node_modules/.bin/mocha
	Or you can install mocha globally
*/

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Testing the value of array', function() {
	describe('First value of the array', function() {
		it('should return 1 when the value is 0', function() {
			assert.equal(1, [1, 2, 3].indexOf(2));
		})
	})
})