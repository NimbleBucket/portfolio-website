import * as types from '../actions/action-types';

export function changePixel(x,y) {
  return {
    type: types.CHANGE_PIXEL,
    x,
    y
  };
}

export function changeColor(color) {
  return {
    type: types.CHANGE_COLOR,
    color
  };
}
