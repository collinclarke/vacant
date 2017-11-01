import React, { Component } from 'react';


export class Overall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overall: 0
    };
  }

  render() {
    return(
      <section className="review-form overall full-screen">
        <div className="review-header">
          <h1>How was your stay at {this.props.host}</h1>

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
