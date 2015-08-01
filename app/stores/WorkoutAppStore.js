var alt = require('../alt');

class WorkoutAppStore {
  constructor() {
    this.workoutInProgress = false;
  }
/*
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorites: LocationActions.FAVORITE_LOCATION,
      addLocation: LocationActions.ADD_LOCATION
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(LocationSource);
  }

  addLocation(location) {
    this.locations.push({key: 3, name: location});
  }
*/
}

module.exports = alt.createStore(WorkoutAppStore, 'WorkoutAppStore');
