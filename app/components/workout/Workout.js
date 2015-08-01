var WorkoutStore = require('../../stores/WorkoutStore');

var React = require('react');
var AltContainer = require('alt/AltContainer');

var WorkoutActions = require('../../actions/WorkoutActions');

var { Link } = require('react-router');

var AddSetForm = React.createClass({
  handleClick: function() {
    var reps = this.refs.reps.getDOMNode().value;
    var weight = this.refs.weight.getDOMNode().value;
    this.props.onSetSubmit(reps, weight);
  },
  render: function() {
    return (
      <div className={this.props.visible ? '' : 'hidden'}>
        <form>
          <label>Weight</label><input ref="weight" type="number" />
          <label>Reps</label><input ref="reps" type="number" />
          <button onClick={this.handleClick}>Add</button>
        </form>
      </div>
      );
  }
});

var SetList = React.createClass({
  render: function() {
    return (
      <div className="workout-list">
        {this.props.sets.map((set, i) => {
          return (
            <div className="element">
              <span className="attr">{set.reps}x</span>
              <span className="attr">:</span>
              <span className="attr">{set.weight}lbs</span>
            </div>  
          );
        })}
        <div className="clear"></div>
      </div>
      );
  }
});

var ExerciseNode = React.createClass({
  getInitialState: function() {
    return {
      showAddSet: false
    };
  },
  removeExercise: function(event) {
    WorkoutActions.removeExercise(this.props.test);
  },
  handleClick: function(event) {
    this.setState({showAddSet: !this.state.showAddSet});
  },
  handleSubmit: function(reps, weight) {
    WorkoutActions.addSet(this.props.test, reps, weight);
  },
  render: function() {
    return (
      <div>
        <div className="block">
          {this.props.name}
          <span onClick={this.handleClick}>Add Set <i className="fa fa-plus fa-2x"></i></span>
          <span onClick={this.removeExercise}><i className="fa fa-close fa-2x"></i></span>
        </div>
        <div>
          <SetList sets={this.props.sets} />
          <AddSetForm visible={this.state.showAddSet} onSetSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
});

var ExerciseList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.exercises.map((exercise, i) => {
          return (
            <ExerciseNode key={i} test={i} sets={exercise.sets} name={exercise.name} />
          );
        })}
      </div>
    );
  }
});

var Title = React.createClass({
  render: function() {
    return (
      <div className="block head full">Workout 1 - {this.props.startDate.toTimeString()}</div>
      
    );
  }
});

var Workout = React.createClass({
  getInitialState: function() {
    return {
      hello: "test"
    };
  },
  componentDidMount: function() {
    //LocationStore.fetchLocations();
  },
  handleClick: function(event) {
    WorkoutActions.addExercise("Push ups");
  },

  render: function() {
    var test = this.state.hello;
    return (
      <div>
        <AltContainer store={WorkoutStore}>
          <Title />
          <ExerciseList />
          <div className="block" onClick={this.handleClick}>Add Exercise <i className="fa fa-plus fa-2x"></i></div> 
          <Link to="exerciseSearch"><div className="block">Add Exercise </div></Link>    
        </AltContainer>
      </div>
    );
  }
}); 

module.exports = Workout;
