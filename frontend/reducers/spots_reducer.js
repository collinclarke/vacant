import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spots_actions';


const initialState = {};


const SpotsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return Object.assign({}, state, action.spots);
    case RECEIVE_SPOT:
      const spot = action.spotObject.spot;
      return Object.assign({}, state, { [spot.id]: spot });
    default:
      return state;
  }
};

export default SpotsReducer;
