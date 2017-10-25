import React from 'react';
import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: ownProps.location.pathname
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === '/login' ? login : signup;
  return {
    processForm: user => dispatch(action(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
