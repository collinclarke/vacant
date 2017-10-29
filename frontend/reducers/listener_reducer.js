import { ADD_GLOBAL_SCROLL, REMOVE_GLOBAL_SCROLL } from '../actions/scroll_actions';

const initialState = { globalScroll: false };

const listenerReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case ADD_GLOBAL_SCROLL:
      return Object.assign({}, state, { globalScroll: true });
    case REMOVE_GLOBAL_SCROLL:
      return initialState;
    default:
      return state;
  }
};
