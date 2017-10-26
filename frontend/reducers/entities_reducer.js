import { combineReducers } from 'redux';
import SpotsReducer from './spots_reducer';


export default combineReducers({ spots: SpotsReducer });
