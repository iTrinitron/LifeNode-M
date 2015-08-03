import WorkoutStore from '../../stores/WorkoutStore';

import React from 'react';

import connectToStores from 'alt/utils/connectToStores';

import WorkoutActions from '../../actions/WorkoutActions';

import { Link } from 'react-router';

class AddSetForm extends React.Component {
  handleClick() {
    var reps = this.refs.reps.getDOMNode().value;
    var weight = this.refs.weight.getDOMNode().value;
    this.props.onSetSubmit(reps, weight);
  }
  render() {
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
}

class SetList extends React.Component {
  render() {
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
}

class ExerciseNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showAddSet: false};
    console.log("My props: ");
    console.log(this.props);
  }
  removeExercise(event) {
    WorkoutActions.removeExercise(this.props.test);
  }
  handleClick(event) {
    this.setState({showAddSet: !this.state.showAddSet});
  }
  handleSubmit(reps, weight) {
    WorkoutActions.addSet(this.props.test, reps, weight);
  }
  render() {
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
}

class ExerciseList extends React.Component {
  render() {
    console.log(this.props);
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
}

class Title extends React.Component {
  render() {
    return (
      <div className="block head full">Workout 1 - {this.props.startDate.toTimeString()}</div>
    );
  }
}

@connectToStores
class Workout extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [WorkoutStore];
  }

  static getPropsFromStores() {
    return WorkoutStore.getState();
  }

  componentDidMount() {
    //LocationStore.fetchLocations();
  }
  handleClick(event) {
    WorkoutActions.addExercise("Push ups");
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
          <Title {...this.props} />
          <ExerciseList {...this.props}  />
          <div className="block" onClick={this.handleClick}>Add Exercise <i className="fa fa-plus fa-2x"></i></div> 
          <Link to="exerciseSearch"><div className="block">Add Exercise </div></Link>  
      </div>
    );
  }
} 

export default Workout;
