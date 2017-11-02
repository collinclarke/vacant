import { fetchSpots } from './spots_actions';
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";


export const changeBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};


export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchSpots(getState().ui.filters)(dispatch);
};
