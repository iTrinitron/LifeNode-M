import React from 'react';
import { RouteHandler, Link } from 'react-router';

import WorkoutAppStore from '../../stores/WorkoutAppStore';

class WorkoutApp extends React.Component {
  render() {
    return (
    	<div>
          <RouteHandler />
      </div>
    );
  }
}; 

export default WorkoutApp;
