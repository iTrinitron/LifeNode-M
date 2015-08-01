import ExerciseStore from '../../stores/ExerciseStore';

import React from 'react';
import AltContainer from 'alt/AltContainer';

var ExerciseActions = require('../../actions/ExerciseActions');

var SearchBox = React.createClass({
	handleChange: function() {
		var input = this.refs.text.getDOMNode().value;
		this.props.handleChange(input);
	},
	render: function() {
		return (
			<div>
				<input ref="text" onChange={this.handleChange} type="text"/>
			</div>
		);
	}
});

var ExerciseList = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.searchExercises.map((exercise, i) => {
		          return (
		            <div>{exercise.name}</div>
		          );
		        })}
			</div>
		)
	}
}); 

var AddExercise = React.createClass({
	render: function() {
		return (
			<div className={this.props.visible ? '' : 'hidden'}>
				Add "{this.props.name}" as a new exercise?
			</div>
		);
	}
})

var ExerciseSearch = React.createClass({
	getInitialState: function() {
		return {
			search: "",
			showAddExercise: false
		}
	},
	search: function(input) {
		this.setState({showAddExercise: false});
		if(input != "") {
			this.setState({showAddExercise: true});
		}
		this.setState({search: input});
		ExerciseActions.fetchExercises(input);
	},	
	render: function() {
		return (
			<div>
		        <AltContainer store={ExerciseStore}>
		        	<SearchBox handleChange={this.search}/>
		        	<AddExercise name={this.state.search} visible={this.state.showAddExercise} />
		        	<ExerciseList />
		        </AltContainer>
		     </div>
		);
	}
});

module.exports = ExerciseSearch;
