import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import '../../animate.css';
import store from '../../store';
import { removeTimer, setActiveTimer, updateTimer } from '../../actions/timerset-actions';
import {Panel, Button, ButtonGroup, Col, Glyphicon} from 'react-bootstrap';

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
    this.getTime = this.getTime.bind(this);
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
  getTime()
  {
    let seconds = Math.floor(this.props.timer.time/1000)%60;
    let minutes = Math.floor(this.props.timer.time/1000/60)%60;
    let hours = Math.floor(this.props.timer.time/1000/60/60)
    return "" + hours + ":" + minutes + ":" + seconds;
  }
  render()
  {
    return (
        <Col sm={6} md={3}>
          <Panel>
            {this.getTime()}
            <ButtonGroup vertical style={{float:"right"}}>
              <Button bsStyle={(this.props.timer.active)?"danger":"success"} onClick={this.playPause}><Glyphicon glyph={(this.props.timer.active)?"pause":"play"} /></Button>
              <Button bsStyle="warning" onClick={this.removeTimer}><Glyphicon glyph="remove"/></Button>
            </ButtonGroup>
          </Panel>
        </Col>

    );
  }
}

export default Timer;
