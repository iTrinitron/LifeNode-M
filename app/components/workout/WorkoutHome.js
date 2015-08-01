import React from 'react';
import AltContainer from 'alt/AltContainer';
import { Link } from 'react-router';

class Workout extends React.Component {
  render() {
    return (
      <Link to="currentWorkout"><div className="panel">Start Workout</div></Link>
    );
  }
}

export default Workout;
