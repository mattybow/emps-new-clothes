import React from 'react';
import cx from 'classnames';

require('./hamburger.scss');

export default React.createClass({

	render() {
		return (
			<div className="hamburger-container">
				<div className="hamburger-filling"></div>
			</div>
		);
	}
});