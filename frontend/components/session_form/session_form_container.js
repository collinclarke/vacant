import React from 'react';
import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    closeModal: ownProps.closeModal,
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formTypeLogin: ownProps.formTypeLogin
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: demo => dispatch(login(demo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
