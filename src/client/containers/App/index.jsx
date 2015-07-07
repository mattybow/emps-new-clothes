import React from 'react';

require('./normalize.css');
require('./app.scss');

export default class App {
  render(){
    console.log('APP INHERITS: ',this.props);
    return (<div>
      {this.props.children}
    </div>);
  }
}