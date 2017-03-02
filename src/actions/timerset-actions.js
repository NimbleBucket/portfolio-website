import * as types from '../actions/action-types';

export function addTimer(timers) {
  return {
    type: types.ADD_TIMER,
    timers
  };
}

export function removeTimer(timerId) {
  return {
    type: types.REMOVE_TIMER,
    timerId
  };
}

export function setActiveTimer(timerId) {
  return {
    type: types.SET_ACTIVE_TIMER,
    timerId
  };
}

export function updateTimer(timerId, time){
  return {
    type: types.UPDATE_TIMER,
    timerId,
    time
  };
}
