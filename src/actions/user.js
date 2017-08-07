import { ADD_USER , ADD_USER_SUCCESS, LOG_OUT, DISPLAY_PROFILE,
        AUTH_USER, AUTH_USER_SUCCESS, GET_ALL_RESERVATION,
       GET_ALL_RESERVATION_SUCCESS, DISPLAY_TICKET_RESERVATION   } from '../constants';


export function addUser(user) {
  return { payload: user, type: ADD_USER }
}

export function addUserSuccess(user) {
  return {payload: user, type: ADD_USER_SUCCESS }
}

export function authUser(user) {
  return {payload: user, type: AUTH_USER};
}

export function authUserSuccess(user) {
  return {payload: user, type: AUTH_USER_SUCCESS};
}

export function logOut(){
  return {type: LOG_OUT}
}

export function listAllReservation( userId ) {
  return {type: GET_ALL_RESERVATION, userId : userId}
}

export function listAllReservationSuccess( reservations ) {
  return {type: GET_ALL_RESERVATION_SUCCESS, payload : reservations}
}

export function displayProfile(){
  return {type: DISPLAY_PROFILE };
}

export function displayTicketReservation() {
  return {type: DISPLAY_TICKET_RESERVATION}
}
