import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import CandidatesView from '../../components/candidatesView';
import * as fetchActions from '../../actions/fetchActions';


@connect(state=>({
	candidates:state.candidates
}))
export default class CandidatesContainer {
	render(){
		//console.log('CONTAINER RENDER');
		//console.log(this.props);
		const { candidates, dispatch } = this.props;
		const actions = bindActionCreators(fetchActions, dispatch);
		return (
			<CandidatesView actions={actions} candidates={candidates} />
		);
	}
}