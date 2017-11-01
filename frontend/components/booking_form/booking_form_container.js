import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    errors: state.errors.bookings
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: form => dispatch(createBooking(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
