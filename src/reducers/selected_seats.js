import { SELECT_SEAT, CLEAR_SEATS } from '../constants';

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_SEAT:
      var new_state = [...state];
      var index = new_state.indexOf(action.payload);
      if(index===-1)
        new_state.push(action.payload);
      else
        var removed_seat = new_state.splice(index,1);
      return new_state;
    case CLEAR_SEATS:
      return [];
    default:
      return state;
  }
}
