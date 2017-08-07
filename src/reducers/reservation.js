import { BOOK_TICKETS, BOOK_TICKETS_SUCCESS } from '../constants';

import CreateApiCall from '../utils/post-request';

export default function(state = {}, action) {
  switch (action.type) {
    case BOOK_TICKETS:
      CreateApiCall.bookTickets({seats: action.payload}, action.userId)
      return state
    case BOOK_TICKETS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
