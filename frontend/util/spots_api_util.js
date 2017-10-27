export const fetchSpots = () => {
  return $.ajax({
    type: "GET",
    url: "api/spots"
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/spots/${id}`
  });
};
