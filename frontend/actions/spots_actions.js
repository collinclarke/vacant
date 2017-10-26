import * as ApiUtil from '../util/spots_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";

export const fetchSpots = () => dispatch => {
  return ApiUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)));
};

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};
