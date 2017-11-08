import { RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS} from '../actions/booking_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';
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
