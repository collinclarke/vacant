import React, { Component } from 'react';
import { Overall, UserImpression, Ratings, PublicReview, Success } from './review_form_steps';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  render() {
      switch(this.state.step) {
        case 1:
         return <Overall host={this.props.host}/>;
        case 2:
          return <UserImpression />;
        case 3:
          return <Ratings />;
        case 4:
          return <PublicReview />;
        case 5:
          return <Success />;
      }
  }
}
