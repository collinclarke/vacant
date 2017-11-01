import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import BookingErrorsReducer from './booking_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  bookings: BookingErrorsReducer,
  reviews: ReviewErrorsReducer
});
