import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT,
  START_LOADING_SPOT,
  START_LOADING_ALL_SPOTS
} from '../actions/spots_actions';

const initialState = {
  indexLoading: false,
  spotLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_SPOT:
      return Object.assign({}, state, { spotLoading: false });
    case START_LOADING_ALL_SPOTS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SPOT:
      return Object.assign({}, state, { spotLoading: true });
    default:
      return state;
  }
};

export default loadingReducer
