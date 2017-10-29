import React from 'react';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spots_actions';
import { addGlobalScroll } from '../../actions/listener_actions';
import SpotsSearch from './spots_search';


const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    addGlobalScroll: () => dispatch(addGlobalScroll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotsSearch);
