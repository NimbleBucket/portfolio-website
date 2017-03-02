/*import React, { Component } from 'react';
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
    this.RemoveTimer = this.RemoveTimer.bind(this);
  }
  AddTimer()
  {
    let newId = "Timer" + Date.now();

    //newId = (this.state.timers[this.state.timers.length-1].id + "Timer";
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
  RemoveTimer(timerId)
  {
    let newTimers = this.state.timers;
    let index = -1;
    let isCurrent = false;
    for(let i = 0; i < newTimers.length;  i++)
    {
      if(newTimers[i].id == timerId)
      {
        if(newTimers[i].active == true)
          isCurrent = true;
        index = i;
        break;
      }
    }
    if(index!=-1)
    {
      newTimers.splice(index,1);
      this.setState({
        timers:newTimers,
        currentTimer: (isCurrent ? 0 : this.state.currentTimer)
      });
    }
  }
  render()
  {
    var myTimers = this.state.timers.map((timer)=>{
      return <Timer name={timer.id} active={timer.active} key={timer.id} playPause={this.SetActiveTimer} remove={this.RemoveTimer}/>
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



export default TimerClockPage;*/
