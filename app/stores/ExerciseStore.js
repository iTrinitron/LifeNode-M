var alt = require('../alt');

var ExerciseActions = require('../actions/ExerciseActions');

class ExerciseStore {

  constructor() {
    this.exercises = [{name: "Push Ups"}, {name: "Pull Ups"}];
    this.searchExercises = this.exercises;

    this.counter = 0;

    this.bindListeners({
      addExercise: ExerciseActions.ADD_EXERCISE,
      fetchExercises: ExerciseActions.FETCH_EXERCISES
    });
/*
    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(LocationSource);*/
  }
  addExercise(exercise) {
    this.exercises[this.counter++] = {name: exercise};
  }

  fetchExercises(str) {
    var length = this.exercises.length;
    this.searchExercises = [];
    for(var i = 0; i < length; ++i) {
      if(~this.exercises[i].name.toLowerCase().indexOf(str.toLowerCase())) {
        this.searchExercises[i] = this.exercises[i];
      }
    }
  }
}

module.exports = alt.createStore(ExerciseStore, 'ExerciseStore');
