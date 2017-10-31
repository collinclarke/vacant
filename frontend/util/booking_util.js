export const createBooking = booking => {
  return $.ajax({
    type: "POST",
    url: "api/reviews",
    data: { booking }
  });
};
