export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
import { postReview } from '../util/review_util.js';

export const submitReview = review => dispatch => {
  const dispatchErrors = errors => dispatch(receiveReviewErrors(errors));
  const dispatchReview = review => dispatch(receiveReview(review));
  return postReview(review).then(dispatchReview, dispatchErrors);
};

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};
