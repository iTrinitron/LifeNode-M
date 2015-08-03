import React from 'react';
import { Link } from 'react-router';

class AppNode extends React.Component {
  render() {
    return (
		<Link to={this.props.route}>
			<div className="block appNode">
				{this.props.name}
			</div>
		</Link>
    );
  }
}

export default AppNode;