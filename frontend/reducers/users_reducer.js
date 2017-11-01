import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spots_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const initialState = {};


const UsersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOT:
      return Object.assign({}, state, { [action.payload.host.id]: action.payload.host });
    case RECEIVE_SPOTS:
      const users = action.payload.users;
      return Object.assign({}, state, users);
    case RECEIVE_BOOKING:
      const user = action.payload.host;
      return Object.assign({}, state, { [action.payload.host.id]: action.payload.host });
    default:
      return state;
  }
};

export default UsersReducer;
