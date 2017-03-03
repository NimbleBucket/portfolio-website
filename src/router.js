import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import TimerSetContainer from './components/containers/timerset-container';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Whoops404 from './components/views/Whoops404';
import navbar from './navbar.js';

export default (

  <Router history={browserHistory}>
    <Route path='/' component={navbar}>
      <Route path='Timer' component={TimerSetContainer} />
    </Route>
  </Router>


);
