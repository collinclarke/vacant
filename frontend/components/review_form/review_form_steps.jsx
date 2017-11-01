import React, { Component } from 'react';
import ReviewRadio from './review_radio';

export class Overall extends Component {
  constructor(props) {
    super(props);
  }

  question () {
    return (
      `How was your stay at ${this.props.host}'s place?`
    );
  }

  render() {
    return(
      <section className="review-form overall full-screen">
        <div className="review-header">
          <h1>{ this.question() }</h1>
          <ReviewRadio type="overall" handleSubmit={this.props.handleSubmit}/>
        </div>

      </section>
    );
  }
}

export class UserImpression extends Component {
  render() {
    return(
      <h1>UserImpression</h1>
    );
  }
}
export class Ratings extends Component {
  render() {
    return(
      <h1>Ratings</h1>
    );
  }
}
export class PublicReview extends Component {
  render() {
    return(
      <h1>PublicReview</h1>
    );
  }
}
export class Success extends Component {
  render() {
    return(
      <h1>Success</h1>
    );
  }
}
