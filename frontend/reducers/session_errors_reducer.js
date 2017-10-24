import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const initialState = [];

const sessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      debugger
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
