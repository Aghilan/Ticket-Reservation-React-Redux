import { ADD_USER, ADD_USER_SUCCESS, LOG_OUT,
        AUTH_USER, AUTH_USER_SUCCESS } from '../constants';

import CreateApiCall from '../utils/add-request';

export default function(state = [], action) {
  switch (action.type) {
    case LOG_OUT:
      return {}
    case ADD_USER:
      CreateApiCall.newUser(action.payload);
      return state;
    case AUTH_USER:
      CreateApiCall.authUser(action.payload);
      return state;
    case AUTH_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
