import * as API from '../util/spots_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";

export const fetchSpots = () => dispatch => {
  return API.fetchSpots().then(dispatch(spots => receiveSpots(spots)));
};

export const receiveSpots = (spots) => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};
