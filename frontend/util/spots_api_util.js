export const fetchSpots = (bounds) => {
  return $.ajax({
    type: "GET",
    url: "api/spots",
    data: bounds
  });
};

export const fetchBookedSpots = userId => {
  return $.ajax({
    type: "GET",
    url: "api/spots",
    data: userId
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/spots/${id}`
  });
};
