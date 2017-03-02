import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import TimerClockPage from './pages/TimerClockPage'
import TimerSetContainer from './components/containers/timerset-container';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Whoops404 from './components/views/Whoops404'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={TimerSetContainer}/>
    <Route path="/Timer" component={App}/>
    <Route path="*" component={Whoops404}/>
  </Router>
);
