import { GET_SEATS, GET_SEATS_SUCCESS, SELECT_SEAT } from '../constants';

export function getTheaterSeats() {
  console.log("Theater Seats")
  return { type: GET_SEATS }
}

export function getSeatsSuccess(seats) {
  console.log("Success")
  return {payload: seats, type: GET_SEATS_SUCCESS }
}

export function selectSeat(seat){
  console.log("Selected seat", seat)
  return { payload: seat, type: SELECT_SEAT }
}
