import DocumentTitle from 'react-document-title';
import React from 'react';
import {RouteHandler} from 'react-router';
import {isLoggedIn} from '../user/store';
import {state} from '../state';
import cx from 'classnames'

// Leverage webpack require goodness for feature toggle based dead code removal.
require('./app.styl');
require('./normalize.css');
require('./app.scss');

const deviceWidths = {
  phone: 375,
  tablet:768
} 

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={device:'unknown'};
  }

  onResize(){
    var w = window.innerWidth;
    this.setState({device:whichDevice(w)});
  }

  componentDidMount() {
    // Must be required here because there is no DOM in Node.js. Remember,
    // mocking DOM in Node.js is an anti-pattern, because it can confuse
    // isomorphic libraries. TODO: Wait for iOS fix, then remove.
    // http://developer.telerik.com/featured/300-ms-click-delay-ios-8/
    require('fastclick').attach(document.body);

    window.addEventListener('resize',this.onResize.bind(this));

    this.onResize();

    state.on('change', () => {
      /*eslint-disable no-console */
      console.time('whole app rerender');
      this.forceUpdate(() => {
        console.timeEnd('whole app rerender');
      });
      /*eslint-enable */
    });
  }

  render() {
    var classes = cx('page',this.state.device);
    return (
      <DocumentTitle title='faceValue'>
        <div className={classes}>
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }

}

function whichDevice(w){
  switch(true){
    case w <= deviceWidths.phone:
      return 'phone';
      break;
    case w <= deviceWidths.tablet:
      return 'tablet';
      break;
    default:
      return 'desktop';
      break;
  }
}
