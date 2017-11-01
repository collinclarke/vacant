import React, { Component } from 'react';
import { Overall, UserImpression, Ratings, PublicReview, Success } from './review_form_steps';
import lodash from 'lodash';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    if (!_.isEmpty(this.props.users)) {
      const hostName = this.props.users[this.props.spot.host_id].first_name;
      switch(this.state.step) {
        case 1:
         return <Overall host={hostName}/>;
        case 2:
          return <UserImpression />;
        case 3:
          return <Ratings />;
        case 4:
          return <PublicReview />;
        case 5:
          return <Success />;
      }
    } else {
      return null;
    }
  }

}

export default ReviewForm;
