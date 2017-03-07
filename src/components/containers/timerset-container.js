import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import store from '../../store';
import { addTimer } from '../../actions/timerset-actions';
import Timer from '../views/timer-list';
//import TimerSetLayout from '../layouts/timerset-layout';
import {Grid, Row, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      <Button className="animated bounce" onClick = {this.AddTimer} >Add
      </Button>
      <Grid>
        <Row>
          <ReactCSSTransitionGroup
           transitionName="headerForm">
           {myTimers}
         </ReactCSSTransitionGroup>
        </Row>
      </Grid>
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
