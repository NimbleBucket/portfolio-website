import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class TimerClockPage extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      timers:[],
      currentTimer:0
    };
    this.AddTimer = this.AddTimer.bind(this);
    this.SetActiveTimer = this.SetActiveTimer.bind(this);
  }
  AddTimer()
  {
    var newId = "Timer"+(this.state.timers.length+1);
    console.log("newId: " + newId);
    var newTimers = this.state.timers;
    newTimers.push(
      {
        time:0,
        roundedTime:0,
        id:newId,
        active:false
      }
    )
    this.setState({timers:newTimers})
  }
  SetActiveTimer(timerId)
  {
    var newTimers = this.state.timers;
    if(this.state.currentTimer!=0)
      newTimers.find((x)=>x.id==this.state.currentTimer).active = false; //[this.state.currentTimer].active = false;
    if(this.state.currentTimer!=timerId)
      newTimers.find((x)=>x.id==timerId).active = true;
    else
      timerId = 0;
    this.setState({
      timers:newTimers,
      currentTimer:timerId
    });
  }
  render()
  {
    var myTimers = this.state.timers.map((timer)=>{
      return <Timer name={timer.id} active={timer.active} key={timer.id} click={this.SetActiveTimer}/>
    });

    return(
      <div>
      <p>TimerClockPage</p>
      <div className="Green-Btn Button" onClick = {this.AddTimer} >Add<br />currentTimer: {this.state.currentTimer}
      </div>

      {myTimers}
      </div>
    );
  }
}

class Timer extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      tickCounter:0
    };
    this.tick = this.tick.bind(this);
    this.click = this.click.bind(this);
  }
  click()
  {
    this.props.click(this.props.name);
  }
  tick()
  {
    var newValue = this.state.tickCounter+1;
    this.setState({
      tickCounter:newValue
    });
  }
  render()
  {
    if(this.props.active == true)
    {
      if(this.intervalId == null)
      {
        this.intervalId = setInterval(this.tick,50);
      }
    }
    else if(this.intervalId != null)
    {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    return (
      <div onClick={this.click}>{this.props.name}: {this.props.active}: {this.state.tickCounter}</div>
    );
  }
}

export default TimerClockPage;
