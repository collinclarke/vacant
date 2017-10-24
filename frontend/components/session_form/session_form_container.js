import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: ownProps.location.pathname
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return (ownProps.location.pathname === '/login' ?

    { processForm: (user) => dispatch(login(user)) } :

    { processForm: (user) => dispatch(signup(user)) }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
