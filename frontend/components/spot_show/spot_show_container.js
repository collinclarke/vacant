import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spots_actions';
import SpotShow from './spot_show';

const mapStateToProps = (state, ownProps) => {
  return {
    spot: state.entities.spots[state.ui.spotDisplay],
    loading: state.ui.loading.spotLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);
