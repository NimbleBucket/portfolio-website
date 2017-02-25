import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import TimerClockPage from './pages/TimerClockPage'
import './index.css';
import {Router, Route, hashHistory} from 'react-router';
import {Whoops404} from './components/Whoops404'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/Timer" component={TimerClockPage}/>
    <Route path="/" component={App}/> 
    <Route path="*" component={Whoops404}/>

  </Router>,
  document.getElementById('root')
);
