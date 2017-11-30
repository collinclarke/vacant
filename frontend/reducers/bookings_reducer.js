import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, REMOVE_BOOKING } from '../actions/booking_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = {};

const BookingsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKING:
      const booking = action.payload.booking;
      return Object.assign({}, state, { [booking.id]: booking });
    case RECEIVE_BOOKINGS:
      const bookings = action.payload.bookings;
      return Object.assign({}, state, bookings);
    case REMOVE_BOOKING:
      const newState = Object.assign({}, state);
      delete newState[action.bookingId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default BookingsReducer;
