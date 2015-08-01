var alt = require('../alt');

class WorkoutActions {
  addExercise(exercise) {
    this.dispatch(exercise);
  }

  addSet(exerciseIndex, reps, weight) {
    var disObj = {exerciseIndex: exerciseIndex, reps: reps, weight: weight};
    this.dispatch(disObj);
  }

  removeExercise(exerciseIndex) {
  	this.dispatch(exerciseIndex);
  }
}

module.exports = alt.createActions(WorkoutActions);
