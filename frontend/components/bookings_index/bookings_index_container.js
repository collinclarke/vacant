import React from 'react';
import { connect } from 'react-redux';
import { fetchBookings, cancelBooking } from '../../actions/booking_actions';
import BookingsIndex from './bookings_index';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    bookings: state.entities.bookings,
    spots: state.entities.spots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    cancelBooking: (bookingId) => dispatch(cancelBooking(bookingId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingsIndex);
