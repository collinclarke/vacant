import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { submitReview } from "../../actions/review_actions";


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitReview: review => dispatch(submitReview(review))
  };
};


export default connect (mapStateToProps, mapDispatchToProps)(ReviewForm);
