import { BOOK_TICKETS, BOOK_TICKETS_SUCCESS, CANCEL_RESERVATION,
        CANCEL_RESERVATION_SUCCESS } from '../constants';

export function bookTickets(seats,userId) {
  return { payload: seats, userId: userId, type: BOOK_TICKETS }
}

export function bookTicketsSuccess(reservation) {
  return {payload: reservation, type: BOOK_TICKETS_SUCCESS }
}

export function cancelReservation(reservation, userId) {
  return { payload: reservation, userId: userId, type: CANCEL_RESERVATION }
}

export function cancelReservationSuccess(reservation) {
  return { payload: reservation, type: CANCEL_RESERVATION_SUCCESS }
}
