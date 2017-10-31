export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS"
import * as ApiUtil from '../util/booking_util';


export const createBooking = booking => dispatch => {
  const dispatchErrors = errors => dispatch(receiveBookingErrors(errors));
  const dispatchBooking = booking => dispatch(receiveBooking(booking));
  return ApiUtil.createBooking(booking)
  .then(dispatchBooking, dispatchErrors);
};

export const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};
