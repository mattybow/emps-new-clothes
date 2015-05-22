import React from 'react';
import {Link,Navigation} from 'react-router';
import Modal from '../components/modal';
import cx from 'classnames';

require('./home.scss');

export default React.createClass({

	mixins:[Navigation],

	componentDidMount(){
	},
	
	clickHandler(){
		var Velocity = require('velocity-animate');
		Velocity(React.findDOMNode(this.refs.wiper),
			{ 
			  translateY:['50%','50%'],
			  translateX:['0%','200%'],
			  scaleX:[2,2],
			  scaleY:[2,2],
			  rotateZ:['-45deg','-45deg']
			  },
			{ duration: 300,
			  complete: ()=>{
				this.transitionTo('/candidates');
			  }
			});
	},

	render() {
		return (
			<div id="home">
				<div className="brand">
					<h1 className="cursive">rwd</h1>
				</div>
				<div className="container v-centered">
					<div className="content">
						<h2>Who's who in 2016</h2>
						<p className="subtext">learn about and keep track of the candidates seeking the nation&apos;s highest office</p>
						<button ref="animateButton" className="round" onClick={this.clickHandler}>enter</button>
					</div>
				</div>
				<div className="wiper" ref="wiper"></div>
			</div>
		);
	}
});