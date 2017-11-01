import { RECEIVE_BOOKING } from '../actions/booking_actions';

const initialState = {};

const BookingsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BOOKING:
      const booking = action.booking;
      return Object.assign({}, state, { [booking.id]: booking });
    default:
      return state;
  }
};

export default BookingsReducer;
