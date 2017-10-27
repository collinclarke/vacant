import React from 'react';
import { connect } from 'react-redux';
import SpotShow from './spot_show';

const mapStateToProps = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.params.match.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
  };
};
