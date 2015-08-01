var React = require('react');
var { Link } = require('react-router');

var AppNode = React.createClass({
  render() {
    return (
		<Link to={this.props.route}>
			<div className="block appNode">
				{this.props.name}
			</div>
		</Link>
    );
  }
});

//This is what is returned
module.exports = AppNode;