import React from 'react';

require('./facePanel.scss');

var Velocity

export default React.createClass({

	componentDidMount: function() {
		Velocity = require('velocity-animate')
	},

	render: function() {
		return (
			<div id="centerPanel">
				<div className="candidate-face">
					<span className="fa fa-scissors fa-2x"></span>
					<div>
						<div></div>
						<img src="assets/img/hillary_2016_05_08_cropped.png" />
					</div>
					<div>
						<div></div>
						<img src="assets/img/hillary_2016_05_08_cropped.png" />
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
	},

	animate: function(vote) {
		// animation time
	}
});
