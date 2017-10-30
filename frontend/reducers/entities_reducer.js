import { combineReducers } from 'redux';
import SpotsReducer from './spots_reducer';
import ReviewsReducer from './reviews_reducer';

export default combineReducers({ spots: SpotsReducer, reviews: ReviewsReducer });
