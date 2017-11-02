import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const initialState = [];

const ReviewErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default ReviewErrorsReducer;
