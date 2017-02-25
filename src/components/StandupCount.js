import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class StandupCount extends Component {
  constructor(props)
  {
    super(props);
    this.calcGoalProgress = this.calcGoalProgress.bind(this);
  }
  percentToDecimal(decimal){
    return ((decimal * 100) + "%")
  }
  calcGoalProgress(total,goal) {
    console.log("percent" + total);
    return this.percentToDecimal(total/goal);
  }
  render()
  {
    return (
      <div className= "standup-count">
          <div className="total-days">
              <span>{this.props.total} days</span>
          </div>
          <div className = "work-from-home">
            <span>{this.props.workFromHome} Home</span>
          </div>
          <div className = "work-from-office">
            <span>{this.props.workFromOffice} Office</span>
          </div>
          <div className = "standup-goal">
            <span>{this.props.goal}<br/></span>
            <span>{this.calcGoalProgress(this.props.total,this.props.goal)}</span>
          </div>

      </div>
    )
  }


}


StandupCount.defaultProps = {
  total: 0,
  workFromHome: 0,
  workFromOffice: 0,
  goal: 50
}

StandupCount.propTypes = {
  total: React.PropTypes.number,
  workFromHome: React.PropTypes.number,
  workFromOffice: React.PropTypes.number,
  goal: React.PropTypes.number
}

export default StandupCount;

/*
Date
workingFrom
*/
