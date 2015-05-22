import React from 'react';

import cx from 'classnames';
import candidatesStore from '../stores/candidates';
import CandidatesView from '../components/candidatesView';

export default React.createClass({

	getInitialState(){
		const candidates = candidatesStore.getCandidates();
		const result = candidates.status==='DONE' ? {candidates:candidates} : {};
		return result;
	},

	componentDidMount(){
		candidatesStore.addChangeListener(this.handleStoreChange);
	},

	handleStoreChange(state,store){
		this.setState({candidates:state.candidates});
	},

	render() {
		const data = candidatesStore.for(this).getCandidates();
		return (
			<CandidatesView candidates={data}/>
		);
	}
});