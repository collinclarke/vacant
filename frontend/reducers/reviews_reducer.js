import { RECEIVE_SPOT } from '../actions/spots_actions';


const initialState = {};


const ReviewsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOT:
      const reviews = action.reviews;
      return Object.assign({}, state, action.reviews);
    default:
      return state;
  }
};

export default ReviewsReducer;
