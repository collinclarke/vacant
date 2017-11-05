import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const {bookings} = state.entities;
  const currentUser = state.session.currentUser;

  const requested = currentUser ? (
    currentUser.bookings.includes(ownProps.spotId)
    ) : false;
  return ({
    requested,
    currentUser,
    errors: state.errors.bookings
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: form => dispatch(createBooking(form)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
