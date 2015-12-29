var mongoose = require('mongoose');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/test');

  var Category =
    mongoose.model('Category', require('./category'), 'categories');

  wagner.factory('Category', function() {
    return Category; // register category service wiyh wagner
  });

  return {
    Category: Category
  };
};
