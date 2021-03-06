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
      <p style={{width:"50%"}}>Time Tracking Timers. The idea behind these timers is that they can be used to track your time doing particular tasks. Planned features: adding and editing titles and improve time display.</p>
      <Button className="animated bounce" onClick = {this.AddTimer} style={{float:"right",position: "absolute",
    right: "40px",
    top: "60px"}}>Add
      </Button>
          <Grid>
            <Row>
              <ReactCSSTransitionGroup transitionName="headerForm"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}>
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
