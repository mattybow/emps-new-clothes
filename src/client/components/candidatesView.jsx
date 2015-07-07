import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import fetchOnWillMount from '../decorators/fetch';

import cx from 'classnames';

require('./candidatesView.scss');

@fetchOnWillMount('/all-candidates',(url,actions)=>{
	actions.fetchFromRemote(url);
})
export default class CandidatesView extends React.Component{
	render() {
		var cards = _.map(this.props.candidates,candidate => <div className="candidate-card" key={candidate.lastName}>{candidate.lastName}</div>);
		return (
			<div className="candidates-card-container">
				{cards}
			</div>
		);
	}
}