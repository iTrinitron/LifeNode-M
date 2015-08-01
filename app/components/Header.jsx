var React = require('react');
var { Link } = require('react-router');

var Header = React.createClass({
  render() {
    return (
	  	<nav className="navbar navbar-default">
		  <div className="container-fluid">
		  	<Link to="home">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">Life App</a>
			    </div>
		    </Link>
		  </div>
		</nav>
    );
  }
});

//This is what is returned
module.exports = Header;