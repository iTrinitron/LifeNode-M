import React from 'react';
import AltContainer from 'alt/AltContainer';
import { RouteHandler, Link } from 'react-router';

import WorkoutAppStore from '../../stores/WorkoutAppStore';

class WorkoutApp extends React.Component {
  render() {
    return (
      <AltContainer store={WorkoutAppStore}>
          <RouteHandler {...this.props} />
      </AltContainer>
    );
  }
};

export default WorkoutApp;