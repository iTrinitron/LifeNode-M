var React = require('react');

var Footer = React.createClass({
  render() {
    return (
        <footer className="footer">
	      <div className="container">
	        <p className="text-muted">Michael Chin</p>
	      </div>
	    </footer>
    );
  }
});

//This is what is returned
module.exports = Footer;