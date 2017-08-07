import { GET_SEATS, GET_SEATS_SUCCESS } from '../constants';

import ReadApiCall from '../utils/get-request';

export default function(state = [], action) {
  switch (action.type) {
    case GET_SEATS:
      ReadApiCall.getSeats();
      return state;
    case GET_SEATS_SUCCESS:
    state=action.payload;
      return action.payload;
    default:
      return state;
  }
}
