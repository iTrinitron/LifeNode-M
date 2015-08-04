var alt = require('../alt');

var ExerciseActions = require('../actions/ExerciseActions');

class ExerciseStore {

  constructor() {
    this.exercises = [];
    this.searchExercises = [];

    this.counter = 0;

    this.bindListeners({
      addExercise: ExerciseActions.ADD_EXERCISE,
      fetchExercises: ExerciseActions.FETCH_EXERCISES,
      getAllExercises: ExerciseActions.GET_ALL_EXERCISES_SUCCESS
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

  getAllExercises(exercises) {
    this.exercises = exercises;
  }

  fetchExercises(str) {
    var length = this.exercises.length;
    this.searchExercises = [];
    for(var i = 0; i < length; ++i) {
      console.log("Searching");
      if(~this.exercises[i].name.toLowerCase().indexOf(str.toLowerCase())) {
        this.searchExercises[i] = this.exercises[i];
      }
    }
  }
}

module.exports = alt.createStore(ExerciseStore, 'ExerciseStore');
