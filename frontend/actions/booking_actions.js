export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
import * as ApiUtil from '../util/booking_util';


export const createBooking = booking => dispatch => {
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  const dispatchBooking = booking => dispatch(receiveBooking(booking));
  return ApiUtil.createBooking(booking)
  .then(dispatchBooking, dispatchErrors);
};

export const receiveBooking = payload => {
  return {
    type: RECEIVE_BOOKING,
    payload
  };
};

export const fetchBookings = () => dispatch => {
  const dispatchBooking = bookings => dispatch(receiveBookings(bookings));
  const dispatchErrors = errors => dispatch(receiveErrors(errors));
  return ApiUtil.fetchBookings()
  .then(dispatchBooking, dispatchErrors);
};

export const receiveBookings = payload => {
  return {
    type: RECEIVE_BOOKINGS,
    payload
  };
};

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};
