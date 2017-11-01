export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};
