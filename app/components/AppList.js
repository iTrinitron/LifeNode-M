import React from 'react';
import AppNode from './AppNode.js';

var appList = [
  { name: "Workout", route: "workout" },
  { name: "Bank", route: "bank" }
];

class AppList extends React.Component {
  render() {
    var AppNodes = appList.map(function(app) {
    return ( <AppNode name={app.name} route={app.route} /> );
  }); 

    return (
      <div>
        {AppNodes}
      </div>
    );
  }
}

export default AppList;

/*
var React = require('react');
var AppNode = require('./AppNode.jsx');

var appList = [
  { name: "Bank", route: "bank"},
  { name: "Workout", route: "workout"},
  { name: "Clock", route:"clock"}
];

var AppList = React.createClass({
  render: function() {
  	var AppNodes = appList.map(function(app) {
		return ( <AppNode name={app.name} route={app.route} /> );
	}); 

    return (
      <div>
      	{AppNodes}
      </div>
    );
  }
});

//This is what is returned
module.exports = AppList;

*/