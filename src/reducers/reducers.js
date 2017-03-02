import { combineReducers } from 'redux';

import timerSetReducer from './timerset-reducer';


var reducers = combineReducers({
  timerSetState:timerSetReducer
});

export default reducers;
