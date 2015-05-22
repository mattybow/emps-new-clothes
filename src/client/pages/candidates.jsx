import React from 'react';
import MCandidatesViewContainer from '../components/martyCandidatesViewCont';

import cx from 'classnames';

require('./candidates.scss');

export default React.createClass({

	render() {
		return (
			<div>
				<div className="page-header">
					<p>the</p>
					<h2>candidates</h2>
				</div>
				<MCandidatesViewContainer />
			</div>
		);
	}
});