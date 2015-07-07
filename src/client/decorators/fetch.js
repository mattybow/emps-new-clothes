import React, { PropTypes } from 'react';
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar';
import _ from 'lodash';


export default function fetchOnWillMount (url,fn) {

  return DecoratedComponent =>
  class FetchOnUpdateDecorator extends React.Component {

    static propTypes = {
      actions: PropTypes.object.isRequired
    }

    componentWillMount () {
      //console.log('fetch decorator',this.props);  //these are the props of the decorated component
      if(_.isEmpty(this.props.candidates)){
        fn(url,this.props.actions);  //dispatches the action
      } 
    }

    render () {
      return (
        <DecoratedComponent {...this.props} />
      )
    }
  }
}