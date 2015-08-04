var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  updated_at: { type: Date, default: Date.new }
});

module.exports = mongoose.model('Workout', workoutSchema);