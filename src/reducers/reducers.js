import { combineReducers } from 'redux';

import timerSetReducer from './timerset-reducer';
import pixArtReducer from './pixart-reducer';


var reducers = combineReducers({
  timerSetState:timerSetReducer,
  pixArtState:pixArtReducer
});

export default reducers;
