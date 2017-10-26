import { RECEIVE_SPOTS } from '../actions/spots_actions';


const initialState = {};


const SpotsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return Object.assign({}, state, action.spots);
    default:
      return state;
  }
};

export default SpotsReducer;
