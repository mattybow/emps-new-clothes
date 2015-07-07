import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';

export default class NotFound extends React.Component {

  render() {
    return (
      <DocumentTitle title={msg('notFound.title')}>
        <div>
          <h1>sorry</h1>
          <p>look elsewhere</p>
          <Link to="home">go home</Link>
        </div>
      </DocumentTitle>
    );
  }

}
