import React, { Component } from 'react';
import { Overall, UserImpression, PublicReview, Success } from './review_form_steps';
import Ratings from './review_ratings';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      overall: 0,
      userImpression: 0,
      ratings: {},
      publicReview: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillUnmount() {
  }

  handleSubmit(value) {
    const next = this.state.step + 1;
    const set = Object.assign(value, {step: next});
    this.setState(set);
  }

  handleFormSubmission() {
    const { overall, userImpression, publicReview } = this.state;
    const { spotId } = this.props.spot;
    const review = Object.assign({}, this.state.ratings,
      {
        overall,
        user_impression: userImpression,
        public_review: publicReview,
        user_id: this.props.currentUser.id,
        spot_id: this.props.match.params.spotId
      }
    );
    this.props.submitReview(review).then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`));
  }

  render() {
    if (!_.isEmpty(this.props.users) && this.props.spot) {
      const hostName = this.props.users[this.props.spot.host_id].first_name;
      switch(this.state.step) {
        case 1:
         return <Overall type="overall" handleSubmit={this.handleSubmit} host={hostName}/>;
        case 2:
          return <UserImpression type="userImpression" handleSubmit={this.handleSubmit} host={hostName}/>;
        case 3:
          return <Ratings type="ratings" handleSubmit={this.handleSubmit} host={hostName}/>;
        case 4:
          return <PublicReview type="publicReview"
            handleSubmit={this.handleSubmit} host={hostName}/>;
        case 5:
          return <Success spotId={this.props.match.params.spotId} handleFormSubmission={this.handleFormSubmission} host={hostName}/>;
      }
    } else {
      return null;
    }
  }

}

export default ReviewForm;
