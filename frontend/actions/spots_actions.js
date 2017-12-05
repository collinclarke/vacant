import * as ApiUtil from '../util/spots_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const START_LOADING_ALL_SPOTS = "START_LOADING_ALL_SPOTS";
export const START_LOADING_SPOT = "START_LOADING_SPOT";

export const fetchSpots = (filters) => dispatch => {
  dispatch(loadSpots());
  return ApiUtil.fetchSpots(filters).then(spots => dispatch(receiveSpots(spots)));
};

export const fetchSpot = (spotId) => dispatch => {
  dispatch(loadSpot(spotId));
  return ApiUtil.fetchSpot(spotId).then(spot => dispatch(receiveSpot(spot)));
};

const updatefilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};

const receiveSpots = (payload) => {
  return {
    type: RECEIVE_SPOTS,
    payload
  };
};

const receiveSpot = (payload) => {
  return {
    type: RECEIVE_SPOT,
    payload
  };
};

const loadSpot = (spotId) => {
  return {
    type: START_LOADING_SPOT,
    spotId
  };
};

export const loadSpots = () => {
  return {
    type: START_LOADING_ALL_SPOTS
  };
};
