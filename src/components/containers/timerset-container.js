import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import '../../animate.css';
import store from '../../store';
import { addTimer } from '../../actions/timerset-actions';
import Timer from '../views/timer-list';
import {Button,CardPanel, Row, Col} from 'react-materialize';
//import TimerSetLayout from '../layouts/timerset-layout';

class TimerSetContainer extends Component{
  constructor(props)
  {
    super(props);
    this.AddTimer = this.AddTimer.bind(this);
  }
  AddTimer()
  {
    console.log("test");
    store.dispatch(addTimer([{
      time:0,
      id:Date.now(),
      active:false
    }]));
  }
  render()
  {
    let myTimers = this.props.timers.map((timer)=>{
      return (<Timer timer={timer} key={timer.id} />);
    });
    console.log(this.props.timers);
    return(
      <div>
      <p>TimerClockPage</p>
      <Button className="Green-Btn Button animated bounce" onClick = {this.AddTimer} >AddcurrentTimer: {this.props.currentTimer}
      </Button>
      <Row>
      {myTimers}
      </Row>
      </div>
    );
  }
}

const mapStateToProps = function(store) {

  return {
    timers: store.timerSetState.timers,
    currentTimer: store.timerSetState.currentTimer
  };

};

export default connect(mapStateToProps)(TimerSetContainer);
