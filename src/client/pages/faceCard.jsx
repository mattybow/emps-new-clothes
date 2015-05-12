import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import LikePanel from '../components/likePanel';
import FacePanel from '../components/facePanel';

require('./faceCard.scss')

export default class Home extends React.Component {

  render() {
    return (
      <DocumentTitle title={msg('home.title')}>
        <div id="panels">
          <LikePanel lr="left" panelText="dislike"/>
          <FacePanel />
          <LikePanel lr="right" panelText="like"/>
        </div>
      </DocumentTitle>
    );
  }

}
