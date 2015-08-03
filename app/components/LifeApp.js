import React from 'react';
import { RouteHandler, Link } from 'react-router';

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

class LifeApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <div className="clear"></div>
        <Footer />
      </div>
    );
  }
}


export default LifeApp;

