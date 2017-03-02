import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import '../../animate.css';
import store from '../../store';
import { removeTimer, setActiveTimer, updateTimer } from '../../actions/timerset-actions';
import {Button,CardPanel, Row, Col} from 'react-materialize';

class Timer extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      lastTickTime:0
    };
    this.tick = this.tick.bind(this);
    this.playPause = this.playPause.bind(this);
    this.removeTimer = this.removeTimer.bind(this);
    this.stop = this.stop.bind(this);
  }
  playPause()
  {
    store.dispatch(setActiveTimer(this.props.timer.id));
  }
  removeTimer()
  {
    store.dispatch(removeTimer(this.props.timer.id));
  }
  tick()
  {
    let timeSinceTick = Date.now() - this.state.lastTickTime;
    store.dispatch(updateTimer(this.props.timer.id,timeSinceTick));
    this.setState({
      lastTickTime: Date.now()
    });
  }
  componentWillReceiveProps(nextProps)
  {
    if(this.props == nextProps)
      return;
    if(nextProps.timer.active == true)
    {
      if(this.intervalId == null)
      {
        this.intervalId = setInterval(this.tick,300);
        this.setState({
          lastTickTime: Date.now()
        });
      }
    }
    else {
      this.stop();
    }
  }
  componentWillUnmount()
  {
    this.stop();
  }
  stop()
  {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  render()
  {
    return (
      <div>
        <Col s={2}>
          <CardPanel  className="teal lighten-4 black-text">
            <div>{Math.floor(this.props.timer.time/1000)}</div>
            <span onClick={this.removeTimer}>X</span>
            <Button floating icon={((this.props.timer.active)?"pause":"play_arrow")} waves="light" className='green' onClick={this.playPause} small>
            </Button>
          </CardPanel>
        </Col>
    </div>
    );
  }
}

export default Timer;
