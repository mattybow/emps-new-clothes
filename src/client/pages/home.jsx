import React from 'react';
import {Link} from 'react-router';
import Modal from '../components/modal';
import cx from 'classnames';

export default React.createClass({

	getInitialState(){
		return {
			isModalOpen:false
		};
	},

	componentDidMount(){
		var Velocity = require('velocity-animate');
		Velocity(React.findDOMNode(this.refs.animateButton),
			{ opacity: 0.5 },
			{ duration: 500 }
			);
	},
	
	clickHandler(){
		this.setState({isModalOpen:!this.state.isModalOpen});
	},

	render() {
		const overlayClasses = cx("modal-overlay",this.state.isModalOpen ? 'open' : '');
		return (
			<div>
				<button ref="animateButton" onClick={this.clickHandler}>enter</button>
				<Modal message="this is a puzzle" header="robots not allowed" open={this.state.isModalOpen} />
				<div className={overlayClasses}></div>
			</div>
		);
	}
});