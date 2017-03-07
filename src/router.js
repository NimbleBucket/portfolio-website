import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import TimerSetContainer from './components/containers/timerset-container';
import PixArtContainer from './components/containers/pixart-container';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Whoops404 from './components/views/Whoops404';
import navbar from './navbar.js';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={navbar}>
      <Route path='Timer' component={TimerSetContainer} />
      <Route path='PixelArt' component={PixArtContainer} />
    </Route>
  </Router>
);
