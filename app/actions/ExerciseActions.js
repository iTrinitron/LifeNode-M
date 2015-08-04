var alt = require('../alt');

class ExerciseActions {
	constructor() {
		this.generateActions('getAllExercisesSuccess');  //Creates a default this.dispatch() version 
	}

  addExercise(exercise) {
    this.dispatch(exercise);
  }

  fetchExercises(str) {
  	this.actions.getAllExercises();
    this.dispatch(str);
  }

  getAllExercises() {
  	$.ajax({ 
  			type: 'GET',
  			url: '/api/exercises' 
  		})
      .done(data => {
        this.actions.getAllExercisesSuccess(data);
      })
      .fail(jqXhr => {
        //
      });
  }
}

module.exports = alt.createActions(ExerciseActions);
