import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';
import StandupCount from '../components/StandupCount'
import StandupList from '../components/StandupList'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      buttonStates : [false,false,false,false,false],
      allStandupDays: [{
        date: new Date("1/2/2017"),
        workLocation: "Home"
      },
      {
        date: new Date("1/3/2017"),
        workLocation: "Office"
      },
      {
        date: new Date("1/4/2017"),
        workLocation: "Office"
      },
      {
        date: new Date("1/4/2017"),
        workLocation: "Office"
      }]
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.countDays = this.countDays.bind(this);
  }
  buttonClick(index)
  {
    console.log("click");
    var newStates = this.state.buttonStates;
    newStates[index] = !newStates[index];
    this.setState({buttonStates: newStates })

  }
  countDays(filter){
  return filter ? this.state.allStandupDays.filter(filter).length : this.state.allStandupDays.length;
  }
  render() {
    var self = this;
    var buttons = this.state.buttonStates.map(function(state, index){
      return <Button color={state ? "Green-Btn Button" : "Red-Btn Button"} name={String(state)} click={self.buttonClick} key={index+"buttons"} btn={index}/>
    });
    var isTrue = this.state.buttonStates.every((x)=> x);
    return (
      <div>
        <div className={isTrue ? "Green-Btn App" : "Red-Btn App"}>

          <StandupCount total={this.countDays()} workFromHome={this.countDays((x)=> x.workLocation =="Home")} workFromOffice={this.countDays((x)=>x.workLocation=="Office")} goal={200}/>
          {buttons}
          <StandupList days ={this.state.allStandupDays}  />
        </div>
      </div>

    );
  }


}

class Button extends Component {
  constructor(props)
  {

    super(props);
    this.click = this.click.bind(this);
  }
  click()
  {
    this.props.click(this.props.btn);
  }
  render()
  {
    return (
      <div className = {this.props.color} onClick = {this.click} ></div>
    )
  }
}

export default App;
