import React from 'react';
import ReduxCandidates from '../containers/CandidatesContainer';
import Hamburger from '../components/hamburger';

import cx from 'classnames';

require('./candidates.scss');

export default React.createClass({

	render() {
		return (
			<div>
				<div className="page-header">
					<span>the</span>
					<span className="font3x">candidates</span>
					<div id="burger"><Hamburger /></div>
				</div>
				<ReduxCandidates />
			</div>
		);
	}
});