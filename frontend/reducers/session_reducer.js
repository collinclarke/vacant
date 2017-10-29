import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const initialState = { currentUser: null };

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
