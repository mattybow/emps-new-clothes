import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

import cx from 'classnames';

require('./candidatesView.scss');

export default React.createClass({

	render() {
		var cards = _.map(this.props.candidates,d => <div className="candidate-card" key={d}>{d}</div>);
		return (
			<div className="candidates-card-container">
				{cards}
			</div>
		);
	}
});