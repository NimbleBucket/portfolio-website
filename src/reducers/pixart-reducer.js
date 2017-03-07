import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  pixels: new Array(16).fill(new Array(16).fill("#FFFFFF")),
  color: "#000000",
  x:16,
  y:16
};
/* timer object should look like this
{
  time:0,
  id,
  active: false
}

*/

const pixArtReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.CHANGE_PIXEL:
      console.log("Change Pixel: " + action.x + " / " +action.y);
      let newPixels = state.pixels.map((row,x)=>{
        let myRow = row.map((col,y)=>{
        return (action.x==x && action.y == y)?state.color:col;
        });
        return myRow;
      });
      return Object.assign({}, state, {pixels: newPixels});

    case types.CHANGE_COLOR:
      return Object.assign({}, state, { color: action.color });

  }

  return state;

}

export default pixArtReducer;
