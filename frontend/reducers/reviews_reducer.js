import { RECEIVE_SPOT } from '../actions/spots_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';


const initialState = {};


const ReviewsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SPOT:
      const reviews = action.payload.reviews;
      return Object.assign({}, state, reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review});
    default:
      return state;
  }
};

export default ReviewsReducer;
