import { RECEIVE_SPOT, START_LOADING_SPOT } from '../actions/spots_actions';


const spotDisplayReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOT:
      const spot = action.payload.spot;
      return spot.id;
    case START_LOADING_SPOT:
      return action.spotId;
    default:
      return state;
  }
};

export default spotDisplayReducer;
