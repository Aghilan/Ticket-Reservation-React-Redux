import { DISPLAY_PROFILE, DISPLAY_TICKET_RESERVATION  } from '../constants';

export default function(state = false, action) {
  switch (action.type) {
    case DISPLAY_PROFILE:
      return true;
    case DISPLAY_TICKET_RESERVATION:
      return false;
    default:
      return state;
  }
}
