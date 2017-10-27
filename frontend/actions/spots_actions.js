import * as ApiUtil from '../util/spots_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

export const fetchSpots = () => dispatch => {
  return ApiUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)));
};

export const fetchSpot = (spotId) => dispatch => {
  return ApiUtil.fetchSpot(spotId).then(spot => dispatch(receiveSpot(spot)));
};

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};

export const receiveSpot = (spot) => {
  return {
    type: RECEIVE_SPOT,
    spot
  };
};
