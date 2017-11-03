import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { submitReview } from "../../actions/review_actions";
import { fetchSpot } from '../../actions/spots_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    spot: state.entities.spots[ownProps.match.params.spotId],
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    submitReview: review => dispatch(submitReview(review))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
