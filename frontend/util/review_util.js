export const postReview = review => {
  debugger
  return $.ajax({
    type: "POST",
    url: `api/spots/${review.spot_id}/reviews`,
    data: { review }
  });
};
