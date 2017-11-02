import { combineReducers } from 'redux';
import spotDisplayReducer from './spot_display_reducer';
import loadingReducer from './loading_reducer';
import listenerReducer from './listener_reducer';
import filterReducer from './filter_reducer';


export default combineReducers({
  spotDisplay: spotDisplayReducer,
  loading: loadingReducer,
  listeners: listenerReducer,
  filters: filterReducer
});
