import { combineReducers } from 'redux';
import SpotsReducer from './spots_reducer';
import ReviewsReducer from './reviews_reducer';
import BookingsReducer from './bookings_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
  spots: SpotsReducer,
  reviews: ReviewsReducer,
  bookings: BookingsReducer,
  users: UsersReducer
 });
