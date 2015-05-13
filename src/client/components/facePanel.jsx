import React from 'react';

require('./facePanel.scss');

export default class facePanel extends React.Component {

	render() {
		return (
			<div id="centerPanel">
				<div className="candidate-face">
					<span className="fa fa-scissors fa-2x"></span>
					<div>
						<div></div>
						<img src="assets/img/hillary_2016_05_08.png" />
					</div>
					<div>
						<div></div>
						<img src="assets/img/hillary_2016_05_08.png" />
					</div>
				</div>
				<div className="candidate-details">
					<div className="name-holder">HILLARY CLINTON</div>
					<div className="details-holder">
						<div>DEMOCRAT</div>
						<div>FORMER SECRETARY OF STATE</div>
						<div>AGE 68</div>
					</div>
				</div>
			</div>
		);
	}
}