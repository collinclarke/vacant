import { combineReducers } from 'redux';
import spotDisplayReducer from './spot_display_reducer';


export default combineReducers({ spotDisplay: spotDisplayReducer });
