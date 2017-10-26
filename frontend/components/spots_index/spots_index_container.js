import React from 'react';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spots_actions';
import SpotsIndex from './spots_index';


const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotsIndex);
