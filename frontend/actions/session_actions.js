import * as API from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const dispatchLogin = user => dispatch(receiveCurrentUser(user));
const dispatchSignup = user => dispatch(receiveCurrentUser(user));
const dispatchErrors = errors => dispatch(receiveErrors(errors));

export const login = (user) => dispatch => {
  return API.login(user).then(dispatchLogin, dispatchErrors);
};

export const signup = (user) => dispatch => {
  return API.signup(user).then(dispatchSignup, dispatchErrors);
};

export const logout = () => dispatch => {
  return API.logout().then( () => dispatch(receiveCurrentUser(null)) );
};

export const receiveCurrentUser = (currentUser) => {
  return{
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
