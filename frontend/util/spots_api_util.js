export const fetchSpots = () => {
  return $.ajax({
    type: "GET",
    url: "api/spots"
  });
};
