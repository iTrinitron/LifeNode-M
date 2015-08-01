var alt = require('../alt');

class ExerciseActions {
  addExercise(exercise) {
    this.dispatch(exercise);
  }

  fetchExercises(str) {
    this.dispatch(str);
  }
}

module.exports = alt.createActions(ExerciseActions);
