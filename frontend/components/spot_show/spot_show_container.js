import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spots_actions'
import SpotShow from './spot_show';

const mapStateToProps = (state, ownProps) => {
  // const spot = state.entities.spots[state.ui.spotDisplay];
  return {
    spot: "spot"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);
