export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const START_LOADING_BOOKINGS = "START_LOADING_BOOKINGS";
import * as ApiUtil from '../util/booking_util';

export const createBooking = booking => dispatch => {
  const dispatchBooking = booking => dispatch(receiveBooking(booking));
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  return ApiUtil.createBooking(booking)
  .then(dispatchBooking, dispatchErrors);
};

export const fetchBookings = () => dispatch => {
  dispatch(loadBookings());
  const dispatchBooking = bookings => dispatch(receiveBookings(bookings));
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  return ApiUtil.fetchBookings()
  .then(dispatchBooking, dispatchErrors);
};

export const cancelBooking = (bookingId, spotId) => dispatch => {
  const dispatchRemoval = () => dispatch(removeBooking(bookingId, spotId));
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

const removeBooking = (bookingId, spotId)=> {
  return {
    type: REMOVE_BOOKING,
    bookingId,
    spotId
  };
};

const loadBookings = () => {
  return {
    type: START_LOADING_BOOKINGS
  };
};
