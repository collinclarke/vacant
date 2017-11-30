export const createBooking = booking => {
  return $.ajax({
    type: "POST",
    url: `api/spots/${booking.spot_id}/bookings`,
    data: { booking }
  });
};

export const fetchBookings = () => {
  return $.ajax({
    type: "GET",
    url: `api/bookings`
  });
};

export const deleteBooking = (bookingId) => {
  return $.ajax({
    type: "DELETE",
    url: `api/bookings/${bookingId}`
  });
};
