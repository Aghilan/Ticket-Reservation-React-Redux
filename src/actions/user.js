import { ADD_USER , ADD_USER_SUCCESS, LOG_OUT,
        AUTH_USER, AUTH_USER_SUCCESS  } from '../constants';


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
