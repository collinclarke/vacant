import React from 'react';
import { connect } from 'react-redux';
import { receiveSpots } from '../../actions/spots_actions';
import SpotsIndex from './spots_index';


const mapStateToProps = state => {
  return {
    spots: Object.values(state.entities.spots)
  };
};


const mapDispatchToProps = dispatch => {
  return {
    receiveSpots: () => dispatch(receiveSpots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotsIndex);
