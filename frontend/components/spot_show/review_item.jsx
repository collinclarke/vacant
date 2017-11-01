import React, { Component } from 'react';

class ReviewItem extends Component {

  render() {
    return (
      <li className="review-item">
        <div className="review-header">
          <div className="user-avatar-wrapper"><img className="user-avatar" src={this.props.review.author.image_url} alt="user avatar"/></div>
          <div className="review-signature">
            <div className="review-author">{this.props.review.author.first_name}</div>
            <div className="review-date">{this.props.review.month_created}</div>
          </div>
        </div>
        <div className="review-body">
          <p>{this.props.review.public_review}</p>
        </div>
      </li>
    );
  }

}

export default ReviewItem;
