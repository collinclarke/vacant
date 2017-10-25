import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionNav from './session_nav';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => (dispatch(login(user))),
    logout: user => (dispatch(logout(user))),
    signup: user => (dispatch(signup(user))),
    clearErrors: () => (dispatch(clearErrors())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionNav);
