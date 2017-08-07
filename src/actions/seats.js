import { GET_SEATS, GET_SEATS_SUCCESS, SELECT_SEAT, CLEAR_SEATS } from '../constants';

export function getTheaterSeats() {
  return { type: GET_SEATS }
}

export function getSeatsSuccess(seats) {
  return {payload: seats, type: GET_SEATS_SUCCESS }
}

export function selectSeat(seat){
  return { payload: seat, type: SELECT_SEAT }
}

export function clearSelection(){
  return {type: CLEAR_SEATS}
}
