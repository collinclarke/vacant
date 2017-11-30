import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, REMOVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_SPOT } from '../actions/spots_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = {};

const BookingsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOT:
      let bookings = action.payload.bookings;
      return Object.assign({}, state, bookings);
    case RECEIVE_BOOKING:
      let booking = action.payload.booking;
      return Object.assign({}, state, { [booking.id]: booking });
    case RECEIVE_BOOKINGS:
      bookings = action.payload.bookings;
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
