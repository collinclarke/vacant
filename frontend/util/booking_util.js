export const createBooking = booking => {
  return $.ajax({
    type: "POST",
    url: `api/spots/${booking.spot_id}/bookings`,
    data: { booking }
  });
};

export const fetchBookings = (userId) => {
  return $.ajax({
    type: "GET",
    url: `api/users/${userId}/bookings`
  });
};
