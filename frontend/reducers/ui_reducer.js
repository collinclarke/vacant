import { combineReducers } from 'redux';
import spotDisplayReducer from './spot_display_reducer';
import loadingReducer from './loading_reducer';


export default combineReducers({
  spotDisplay: spotDisplayReducer,
  loading: loadingReducer
});
