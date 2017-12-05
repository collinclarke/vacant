import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_BOOKING, RECEIVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_SPOT } from '../actions/spots_actions';

const initialState = { currentUser: null };

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });
    case RECEIVE_SPOT:
      return Object.assign({}, state, { currentUser: action.payload.currentUser });
    case REMOVE_BOOKING:
      let spotId = action.spotId;
      let newState = Object.assign({}, state);
      let spots = newState.currentUser.bookedSpots;
      let idx = spots.indexOf(spotId);
      spots.splice(idx, 1);
      return newState;
    case RECEIVE_BOOKING:
      spotId = action.payload.booking.spot_id;
      newState = Object.assign({}, state);
      spots = newState.currentUser.bookedSpots;
      spots.push(spotId);
      return newState;
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;

  }
};

export default sessionReducer;
