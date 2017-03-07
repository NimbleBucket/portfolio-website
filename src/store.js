import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers.js';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));
export default store;
