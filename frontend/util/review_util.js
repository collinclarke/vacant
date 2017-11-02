export const postReview = review => {
  return $.ajax({
    type: "POST",
    url: `api/spots/${review.spot_id}/reviews`,
    data: { review }
  });
};
