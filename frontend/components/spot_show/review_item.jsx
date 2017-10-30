import React, { Component } from 'react';

class ReviewItem extends Component {

  render() {
    return (
      <li>
        <h1>{this.props.review.id}</h1>
      </li>
    );
  }

}

export default ReviewItem;
