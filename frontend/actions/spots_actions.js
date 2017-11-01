import * as ApiUtil from '../util/spots_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const START_LOADING_ALL_SPOTS = "START_LOADING_ALL_SPOTS";
export const START_LOADING_SPOT = "START_LOADING_SPOT";

export const fetchSpots = () => dispatch => {
  dispatch(loadSpots());
  return ApiUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)));
};

export const fetchSpot = (spotId) => dispatch => {
  dispatch(loadSpot());
  return ApiUtil.fetchSpot(spotId).then(spot => dispatch(receiveSpot(spot)));
};

export const receiveSpots = (payload) => {
  return {
    type: RECEIVE_SPOTS,
    payload
  };
};

export const receiveSpot = (payload) => {
  return {
    type: RECEIVE_SPOT,
    payload
  };
};

export const loadSpot = (spot) => {
  return {
    type: START_LOADING_SPOT
  };
};

export const loadSpots = (spot) => {
  return {
    type: START_LOADING_ALL_SPOTS
  };
};
