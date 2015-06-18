import React from 'react';
import MCandidatesViewContainer from '../components/martyCandidatesViewCont';
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
				<MCandidatesViewContainer />
			</div>
		);
	}
});