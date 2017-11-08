import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import { clearErrors } from '../../actions/session_actions';
import BookingForm from './booking_form';

const mapStateToProps = (state, ownProps) => {

  const currentUser = state.session.currentUser;
  return ({
    currentUser,
    errors: state.errors.bookings
  });

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: form => dispatch(createBooking(form)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
