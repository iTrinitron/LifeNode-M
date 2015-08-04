import ExerciseStore from '../../stores/ExerciseStore';

import React from 'react';

import connectToStores from 'alt/utils/connectToStores';

import ExerciseActions from '../../actions/ExerciseActions';

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

@connectToStores
class ExerciseSearch extends React.Component {
	constructor(props) {
		super(props);
    	this.state = {showAddExercise: false, search: ""}

    	//Pull down all of the exercises
    	//ExerciseActions.getAllExercises();

    	this.search = this.search.bind(this);
  	}

  	static getStores() {
	    return [ExerciseStore];
	  }

	  static getPropsFromStores() {
	    return ExerciseStore.getState();
	  }

	search(input) {
		this.setState({showAddExercise: false});
		if(input != "") {
			this.setState({showAddExercise: true});
		}
		this.setState({search: input});
		ExerciseActions.fetchExercises(input);
	}

	render() {
		return (
			<div>
	        	<SearchBox handleChange={this.search}/>
	        	<AddExercise name={this.state.search} visible={this.state.showAddExercise} />
	        	<ExerciseList {...this.props} />
		     </div>
		);
	}
}

export default ExerciseSearch;
