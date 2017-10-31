import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitForm: form => dispatch(submitForm(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
