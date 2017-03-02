import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  timers: [],
  currentTimer: -1
};
/* timer object should look like this
{
  time:0,
  id,
  active: false
}

*/

const timerSetReducer = function(state = initialState, action) {
  let newTimers = [];
  let newCurrentTimer = -1;
  switch(action.type) {

    case types.ADD_TIMER:
      console.log("add timer");
      newTimers = state.timers.concat(action.timers);
      return Object.assign({}, state, { timers: newTimers });

    case types.REMOVE_TIMER:
      console.log("remove timer");
      newTimers= _.filter(state.timers, timer => timer.id != action.timerId);
      if(newTimers != state.timers)
        console.log("not removed");
      return Object.assign({}, state, { timers: newTimers });

    case types.SET_ACTIVE_TIMER:
      newTimers = state.timers;
      newCurrentTimer = action.timerId
      if(state.currentTimer!=-1)
      {
        let oldActive = newTimers.find((x)=>x.id==state.currentTimer);
        if(oldActive)
          oldActive.active = false; 

      }
      if(state.currentTimer!=action.timerId)
        newTimers.find((x)=>x.id==action.timerId).active = true;
      else
        newCurrentTimer = -1;
      return Object.assign({}, state, { timers: newTimers, currentTimer: newCurrentTimer});

      case types.UPDATE_TIMER:
        newTimers = state.timers;
        newTimers[newTimers.findIndex((x)=>x.id==action.timerId)].time += action.time;
        return Object.assign({}, state, { timers: newTimers})

  }

  return state;

}

export default timerSetReducer;
