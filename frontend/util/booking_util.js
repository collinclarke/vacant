export const createBooking = booking => {
  return $.ajax({
    type: "POST",
    url: `api/spots/${booking.spot_id}/bookings`,
    data: { booking }
  });
};
