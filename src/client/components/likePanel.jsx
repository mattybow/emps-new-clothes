import React from "react";
import cx from "classnames";

require('./likePanel.scss');

export default class LikePanel extends React.Component {
	
	render(){
		var classes = cx('likePanel',this.props.lr);
		return (
			<div className={classes}>
				<div className="likePanel-text">{this.props.panelText}</div>
			</div>
		);
	}
}