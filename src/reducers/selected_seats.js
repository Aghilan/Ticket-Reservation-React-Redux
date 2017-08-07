import { SELECT_SEAT } from '../constants';

import ReadApiCall from '../utils/get-request';

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_SEAT:
      var new_state = [...state];
      var index = new_state.indexOf(action.payload);
      console.log(index)
      if(index===-1)
        new_state.push(action.payload);
      else
        var removed_seat = new_state.splice(index,1);
      console.log(new_state);
      return new_state;
    default:
      return state;
  }
}
