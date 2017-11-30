import {
  RECEIVE_SPOTS,
  RECEIVE_SPOT,
  START_LOADING_SPOT,
  START_LOADING_ALL_SPOTS
} from '../actions/spots_actions';

import {
  START_LOADING_BOOKINGS,
  RECEIVE_BOOKINGS
} from '../actions/booking_actions';

const initialState = {
  spotsIndexLoading: false,
  spotLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOTS:
      return Object.assign({}, state, { spotsIndexLoading: false });
    case RECEIVE_SPOT:
      return Object.assign({}, state, { spotLoading: false });
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, { bookingsIndexLoading: false });
    case START_LOADING_ALL_SPOTS:
      return Object.assign({}, state, { spotsIndexLoading: true });
    case START_LOADING_SPOT:
      return Object.assign({}, state, { spotLoading: true });
    case START_LOADING_BOOKINGS:
      return Object.assign({}, state, { bookingsIndexLoading: true});
    default:
      return state;
  }
};

export default loadingReducer;
