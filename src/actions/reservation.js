import { BOOK_TICKETS, BOOK_TICKETS_SUCCESS } from '../constants';

export function bookTickets(seats,userId) {
  console.log("Ticket Booking")
  return { payload: seats, userId: userId, type: BOOK_TICKETS }
}

export function bookTicketsSuccess(reservation) {
  console.log("Booking Success")
  return {payload: reservation, type: BOOK_TICKETS_SUCCESS }
}
