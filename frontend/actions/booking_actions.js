export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
import * as ApiUtil from '../util/booking_util';

export const createBooking = booking => dispatch => {
  const dispatchBooking = booking => dispatch(receiveBooking(booking));
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  return ApiUtil.createBooking(booking)
  .then(dispatchBooking, dispatchErrors);
};

export const fetchBookings = () => dispatch => {
  const dispatchBooking = bookings => dispatch(receiveBookings(bookings));
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  return ApiUtil.fetchBookings()
  .then(dispatchBooking, dispatchErrors);
};

export const cancelBooking = bookingId => dispatch => {
  const dispatchRemoval = () => dispatch(removeBooking(bookingId));
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  return ApiUtil.deleteBooking(bookingId)
  .then(dispatchRemoval, dispatchErrors);
};

const receiveBooking = payload => {
  return {
    type: RECEIVE_BOOKING,
    payload
  };
};

const receiveBookings = payload => {
  return {
    type: RECEIVE_BOOKINGS,
    payload
  };
};

const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

const removeBooking = bookingId => {
  return {
    type: REMOVE_BOOKING,
    bookingId
  };
};
