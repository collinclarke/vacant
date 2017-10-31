export const CREATE_BOOKING = "CREATE_BOOKING";
import * as ApiUtil from '../util/booking_util';

export const createBooking = booking => dispatch => {
  return ApiUtil.createBooking(booking)
  .then(booking => dispatch(receiveBooking(booking)));
};

export const receiveBooking = booking => {
  return {
    type: CREATE_BOOKING,
    booking
  };
};
