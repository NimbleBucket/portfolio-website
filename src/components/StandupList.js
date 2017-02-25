import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class StandupList extends Component {
  constructor(props)
  {
    super(props);
  }
  render()
  {
    var dayRows = this.props.days.map(function(x,i){
      return (<StandupRow key={i} date = {x.date} workLocation = {x.workLocation} />);
    });
    return (
    <table>
    <thead>
      <th>Date</th>
      <th>Location</th>
    </thead>
    <tbody>
      {dayRows}
    </tbody>
    </table>
    );
  }
}

StandupList.propTypes = {
  date: function(props){
    if(!Array.isArray(props.days)){
      return new Error(
        "StandupList requires an array"
      );
    }else if (!props.days.length) {
        return new Error(
          "StandupList must have at least one record"
        );
    }
  }
}

class StandupRow extends Component{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
    <tr>
      <td>{this.props.date.getMonth()+1}/{this.props.date.getDate()}/{this.props.date.getFullYear()}</td>
      <td>{this.props.workLocation}</td>
    </tr>
    );
  }
}
StandupRow.propTypes =
{
  workLocation: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired
}
export default StandupList;
