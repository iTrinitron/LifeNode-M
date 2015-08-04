import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

var COMPONENTS_PATH = './components';

import App from './components/LifeApp';

import Home from './components/AppList';

import WorkoutApp from './components/workout/WorkoutApp.js';
import WorkoutHome from './components/workout/WorkoutHome.js';
import Workout from './components/workout/Workout.js';
import ExerciseSearch from './components/exercise/ExerciseSearch.js';

import BankApp from './components/bank/BankApp';

export default (
  <Route name="home" path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="workout" path='workout-app' handler={WorkoutApp}>
        <DefaultRoute name="workoutHome" handler={WorkoutHome} />

        <Route name="currentWorkout" path="workout" handler={Workout} />
        <Route name="exerciseSearch" handler={ExerciseSearch} /> 
    </Route>

    <Route name="bank" path="bank-app" handler={BankApp} >

    </Route>
  </Route>
);
