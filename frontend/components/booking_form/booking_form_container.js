import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { bookSpot } from '../../actions/spots_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    bookSpot: form => dispatch(bookSpot(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
