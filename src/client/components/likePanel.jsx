import React from "react";
import cx from "classnames";

require('./likePanel.scss');

export default React.createClass({

	render: function(){
		var classes = cx('likePanel',this.props.lr);
		return (
			<div className={classes}>
				<div className="likePanel-text" onClick={this.props.voteCb}>{this.props.panelText}</div>
			</div>
		);
	}
});
