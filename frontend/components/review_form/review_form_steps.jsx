import React, { Component } from 'react';
import ReviewRadio from './review_radio';

export class Overall extends Component {

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
  question () {
    return (
      `How did your stay at ${this.props.host}'s place compare to your expectations?`
    );
  }

  render() {

    return(
      <section className="review-form overall full-screen">
        <div className="review-header">
          <h1>{ this.question() }</h1>
          <ReviewRadio type="userImpression" handleSubmit={this.props.handleSubmit}/>
        </div>

      </section>
    );
  }
}

export class PublicReview extends Component {
  constructor(){
    super();
    this.state = {
      publicReview: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ publicReview: e.currentTarget.value });
  }

  handleSubmit() {
    e.preventDefault();
    this.props.handleSubmit({publicReview: this.state.publicReview});
  }

  question () {
    return (
      `Write a public review`
    );
  }

  render() {
    return(
      <section className="review-form overall full-screen">
        <div className="review-header">
          <h1>{ this.question() }</h1>
          <form handleSubmit={this.handleSubmit}>
            <textarea onChange={this.handleTextChange} placeholder="Write review here..."></textarea>
          </form>
        </div>

      </section>
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
