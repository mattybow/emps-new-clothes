import App from './containers/App';
import Face from './pages/faceCard';
import Home from './pages/home';
import Candidates from './pages/candidates';
import NotFound from './pages/notfound.react';
import React from 'react';
import {Route} from 'react-router';

export default (
  <Route component={App}>
    <Route path="/" component={Home} name="home" />
    <Route component={Face} name="face" path="/candidate"/>
    <Route component={Candidates} name="candidates" path="/candidates"/>
  </Route>
);
