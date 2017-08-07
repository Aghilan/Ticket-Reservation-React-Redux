import { GET_ALL_RESERVATION, GET_ALL_RESERVATION_SUCCESS,
          CANCEL_RESERVATION, CANCEL_RESERVATION_SUCCESS } from '../constants';

import ReadApiCall from '../utils/get-request';
import DeleteApiCall from '../utils/delete-request'

export default function(state = [], action) {
  switch (action.type) {
    case GET_ALL_RESERVATION:
      ReadApiCall.listAllReservation(action.userId);
      return state;
    case GET_ALL_RESERVATION_SUCCESS:
      var new_state = [...state];
      new_state = action.payload;
      return new_state;
    case CANCEL_RESERVATION:
      DeleteApiCall.deleteReservation({reservationId : action.payload}, action.userId)
      return state;
    case CANCEL_RESERVATION_SUCCESS:
      var new_state = state;
      new_state = new_state.filter(function( reservation ) {
        return reservation._id !== action.payload.reservationId;
      });
      return new_state
    default:
      return state;
  }
}
