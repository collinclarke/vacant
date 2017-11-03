import React, { Component } from 'react';
import ReviewRadio from './review_radio';
import { Link } from 'react-router-dom';

export class Overall extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.set = {};
  }

  question () {
    return (
      `How was your stay at ${this.props.host}'s place?`
    );
  }

  handleChange(set) {
    this.set = set;
  }

  render() {
    return(
      <section className="review-form overall full-screen">
        <div className="rating-header">
          <h1>{ this.question() }</h1>
          <ReviewRadio type="overall" handleChange={this.handleChange}/>
        </div>
        <button onClick={() => this.props.handleSubmit(this.set)}>Next</button>
      </section>
    );
  }

}

export class UserImpression extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.set = {};
  }

  question () {
    return (
      `How did your stay at ${this.props.host}'s place compare to your expectations?`
    );
  }

  handleChange(set) {
    this.set = set;
  }

  render() {

    return(
      <section className="review-form overall full-screen">
        <div className="rating-header">
          <h1>{ this.question() }</h1>
          <ReviewRadio type="userImpression" handleChange={this.handleChange}/>
        </div>
        <button onClick={() => this.props.handleSubmit(this.set)}>Next</button>
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ publicReview: e.currentTarget.value });
  }

  handleSubmit(e) {
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
        <div className="rating-header">
          <h1>{ this.question() }</h1>
          <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleTextChange} placeholder="Write review here..."></textarea>
            <button>Submit</button>
          </form>
        </div>

      </section>
    );
  }
}

export class Success extends Component {
  render() {
    return(
      <section className="review-form overall full-screen">
        <div className="rating-header">
          <h1>Confirm review submission</h1>
          <button onClick={this.props.handleFormSubmission}>Submit Review</button>
          <Link to={`/spots/${this.props.spotId}`}>Back to spot</Link>
        </div>
      </section>
    );
  }
}
