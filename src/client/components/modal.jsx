import React from 'react';
import cx from 'classnames';
import {Navigation} from 'react-router';

require('./modal.scss');

export default React.createClass({

	mixins:[Navigation],

	propTypes:{
		message:React.PropTypes.string,
		open:React.PropTypes.bool,
		header:React.PropTypes.string
	},

	puzzleDoneHandler:function(){
		this.transitionTo('/hillary');
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
