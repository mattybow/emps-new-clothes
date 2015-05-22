import React from 'react';
import cx from 'classnames';
import {Navigation} from 'react-router';
import request from 'superagent';

require('./modal.scss');

export default React.createClass({

	mixins:[Navigation],

	propTypes:{
		message:React.PropTypes.string,
		open:React.PropTypes.bool,
		header:React.PropTypes.string
	},

	puzzleDoneHandler:function(){
		request.post('/humans')
				.send({data:'I am a human'})
				.end((err,res) => {
					if(res.ok){
						this.transitionTo('/candidate');
					} else {
						alert('check your pulse you might be robot!');
					}
				});
		
	},

	render: function() {
		const {message, header, open} = this.props;
		const modalClasses = cx('modal',open ? 'open' : 'closed');
		return (
			<div className={modalClasses}>
				<div className="modal-content">
					<div className="modal-header">
						<h3>{header}</h3>
					</div>
					<div className="modal-message">{message}</div>
					<button onClick={this.puzzleDoneHandler}>done</button>
				</div>
			</div>
		);
	}

});
