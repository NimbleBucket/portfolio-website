import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import store from '../../store';
import { addTimer } from '../../actions/timerset-actions';
import { changePixel, changeColor} from '../../actions/pixart-actions';
import Timer from '../views/timer-list';
//import TimerSetLayout from '../layouts/timerset-layout';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactHeight from 'react-height';
import {ChromePicker} from 'react-color';
const ColorPicker = ChromePicker;
class PixArtContainer extends Component{
  constructor(props)
  {
    super(props);
    this.ColorPixel = this.ColorPixel.bind(this);
    this.SetHeight = this.SetHeight.bind(this);
    this.height = 0;
    this.state = {
      colorPickerOn:false
    };
  }
  ColorPixel(x,y)
  {
    console.log("color pixel");
    store.dispatch(changePixel(x,y));
  }
  SetHeight(newHeight)
  {
    this.setState({height:newHeight});
  }
  render()
  { 
    console.log(this.props.pixels);
    let myPixels = this.props.pixels.map((row,x)=>{
      let myRow = row.map((col,y)=>{
      return (<td key={y} onClick={()=>this.ColorPixel(x,y)}><div className="square" style={{backgroundColor: col}}></div> </td>);
      });
      return <tr key={x}>{myRow}</tr>;
    });
    return(
      <div style={{display:"flex"}}>
          <table >
            <tbody>
              {myPixels}
            </tbody>
          </table>
        <div >
          <div style={{height:"100%", width:"3em", backgroundColor:this.props.color}}></div>
        </div>

            <ColorPicker color={this.props.color} onChangeComplete={color => store.dispatch(changeColor(color.hex))}/>

      </div>
    );
  }
}

const mapStateToProps = function(store) {

  return {
    pixels: store.pixArtState.pixels,
    color: store.pixArtState.color
  };

};

export default connect(mapStateToProps)(PixArtContainer);
