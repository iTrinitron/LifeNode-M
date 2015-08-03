/*
import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';


import App from './components/App';
import Home from './components/Home';

import LifeApp from './components/LifeApp';
import AppList from './components/AppList';

import WorkoutApp from './components/workout/WorkoutApp.js';
import WorkoutHome from './components/workout/WorkoutHome.js';
import Workout from './components/workout/Workout.js';
import ExerciseSearch from './components/exercise/ExerciseSearch.js';

var routes = (
    <Route name="home" path='/' handler={LifeApp}>
        <DefaultRoute name="appList" handler={AppList} />

        <Route name="workout" path="workout-app" handler={WorkoutApp} >
            <DefaultRoute name="workoutHome" handler={WorkoutHome} />
            <Route name="currentWorkout" path="workout" handler={Workout} />
            <Route name="exerciseSearch" handler={ExerciseSearch} />
        </Route>
        
        
    </Route>
);
*/


//OLD VERSION

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/LifeApp';

import Home from './components/AppList';

//This has the error
import WorkoutApp from './components/workout/WorkoutApp.js';
import WorkoutHome from './components/workout/WorkoutHome.js';
import Workout from './components/workout/Workout.js';
import ExerciseSearch from './components/exercise/ExerciseSearch.js';

export default (
  <Route name="home" path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="workout" path='workout-app' handler={WorkoutApp}>
        <DefaultRoute name="workoutHome" handler={WorkoutHome} />

        <Route name="currentWorkout" path="workout" handler={Workout} />
        <Route name="exerciseSearch" handler={ExerciseSearch} /> 
    </Route>
  </Route>
);

//
        //<Route name="currentWorkout" path="workout" handler={Workout} />
        //<Route name="exerciseSearch" handler={ExerciseSearch} /> 

/*
export default (
  <Route name="home" path='/' handler={App}>
  </Route>
); */
