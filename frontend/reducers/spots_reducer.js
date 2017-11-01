import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spots_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions'


const initialState = {};


const SpotsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return Object.assign({}, state, action.payload.spots);
    case RECEIVE_SPOT:
      const spot = action.payload.spot;
      return Object.assign({}, state, { [spot.id]: spot });
    case RECEIVE_BOOKINGS:
      const spots = action.payload.spots;
      return Object.assign({}, state, action.payload.spots);
    default:
      return state;
  }
};

export default SpotsReducer;
