import { RECEIVE_SPOT } from '../actions/spots_actions';


const spotDisplayReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOT:
      const spot = action.spotObject.spot;
      return spot.id;
    default:
      return state;
  }
};

export default spotDisplayReducer;
