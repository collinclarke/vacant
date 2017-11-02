import { UPDATE_BOUNDS } from '../actions/filter_actions';

const initialState = { bounds: null };

const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case UPDATE_BOUNDS:
      const { bounds } = action;
      return Object.assign({}, state, { bounds: bounds });
    default:
      return state;
  }
};

export default filterReducer;
