import React from 'react';
import { connect } from 'react-redux';
import { fetchSpots, loadSpots } from '../../actions/spots_actions';
import { addGlobalScroll } from '../../actions/listener_actions';
import { updateBounds } from '../../actions/filter_actions';
import SpotsSearch from './spots_search';


const mapStateToProps = state => {
  return {
    spots: state.entities.spots,
    loading: state.ui.loading.indexLoading
  };
};


const mapDispatchToProps = dispatch => {
  return {
    // fetchSpots: () => dispatch(fetchSpots()),
    loadSpots: () => dispatch(loadSpots()),
    updateBounds: bounds => dispatch(updateBounds(bounds)),
    addGlobalScroll: () => dispatch(addGlobalScroll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotsSearch);
