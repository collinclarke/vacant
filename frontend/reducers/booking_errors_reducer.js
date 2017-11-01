import { RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS, CLEAR_ERRORS } from '../actions/booking_actions';

const initialState = [];

const bookingsErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_BOOKING:
      return [];
    case RECEIVE_BOOKING_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default bookingsErrorsReducer;
