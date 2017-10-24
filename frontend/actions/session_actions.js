import * as API from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";




let dispatchErrors;

export const login = (user) => dispatch => {
  dispatchErrors = errors => dispatch(receiveErrors(errors));
  const dispatchLogin = user => dispatch(receiveCurrentUser(user));
  return API.login(user).then(dispatchLogin, dispatchErrors);
};

export const signup = (user) => dispatch => {
  dispatchErrors = errors => dispatch(receiveErrors(errors));
  const dispatchSignup = user => dispatch(receiveCurrentUser(user));
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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
