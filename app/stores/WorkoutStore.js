var alt = require('../alt');

var WorkoutActions = require('../actions/WorkoutActions');

class WorkoutStore {

  constructor() {
    this.exercises = [{name: 'Bench', sets: []}];
    this.startDate = new Date();
    this.counter = 0;

    this.bindListeners({
      addExercise: WorkoutActions.ADD_EXERCISE,
      removeExercise: WorkoutActions.REMOVE_EXERCISE,
      addSet: WorkoutActions.ADD_SET
    });
/*
    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(LocationSource);*/
  }

  addSet(disObj) {
    console.log(this.exercises[disObj.exerciseIndex]);
    console.log(this.exercises);
    console.log(disObj.exerciseIndex);
    this.exercises[disObj.exerciseIndex].sets.push({reps: disObj.reps, weight: disObj.weight});
  }

  addExercise(exercise) {
    this.exercises[this.counter++] = {name: exercise, sets: []};
  }

  removeExercise(exerciseIndex) {
    this.exercises.splice(exerciseIndex, 1);
  }
}

module.exports = alt.createStore(WorkoutStore, 'WorkoutStore');
