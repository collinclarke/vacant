export const fetchSpots = (bounds) => {
  return $.ajax({
    type: "GET",
    url: "api/spots",
    data: bounds
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/spots/${id}`
  });
};
