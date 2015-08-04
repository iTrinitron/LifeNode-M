var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Exercise', exerciseSchema);