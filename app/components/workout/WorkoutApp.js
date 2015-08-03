import React from 'react';
//import AltContainer from 'alt';
import { RouteHandler, Link } from 'react-router';

import WorkoutAppStore from '../../stores/WorkoutAppStore';

/*class WorkoutApp extends React.Component {
  render() {
    return (
      <AltContainer store={WorkoutAppStore}>
          <RouteHandler />
      </AltContainer>
    );
  }
}; */

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

/*

AltContainer is not working nicely with RouteHandler??

class WorkoutApp extends React.Component {
  render() {
    return (
      <AltContainer store={WorkoutAppStore}>
      	<RouteHandler {...this.props} />
      </AltContainer>
    );
  }
};
*/