import { Route, Redirect, withRouter } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';



const Auth = (props) => {
  const {loggedIn, component: Component, path} = props;
  const rendering = !loggedIn ? (<Component {...props} />) : (<Redirect to='/' />);
  return (
    <Route path={ path } render={ props => rendering } />
  );
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
