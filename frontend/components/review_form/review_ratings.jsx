import React, { Component } from 'react';
import ReviewRadio from './review_radio';

class Ratings extends Component {
  constructor(props) {
    super(props);
    this.rating = {
      cleanliness: 0,
      accuracy: 0,
      communication: 0,
      check_in: 0,
      value: 0,
      location: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  question () {
    return (
      `How would you rate these?`
    );
  }

  handleSubmit(rating) {

  }

  handleChange(rating) {
    this.rating = Object.assign(this.rating, rating);
  }

  render() {
    return(
      <section className="review-form overall full-screen">
        <div className="rating-header">
          <h1>{ this.question() }</h1>
        </div>
        <div className="review-category first">
          <h3>Cleanliness</h3>
          <ReviewRadio type="cleanliness" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div className="review-category">
          <h3>Accuracy</h3>
          <ReviewRadio type="accuracy" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div className="review-category">
          <h3>Communication</h3>
          <ReviewRadio type="communication" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div className="review-category">
          <h3>Check-In</h3>
          <ReviewRadio type="checkIn" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div className="review-category">
          <h3>Value</h3>
          <ReviewRadio type="value" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <div className="review-category">
          <h3>Location</h3>
          <ReviewRadio type="location" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <button onClick={() => this.props.handleSubmit({ratings: this.rating})}>Next</button>
      </section>
    );
  }
}


export default Ratings;
