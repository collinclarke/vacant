import React, { Component } from 'react';


class RatingBlurb extends Component {

  ratingStars() {
    const stars = [];
    for (var i = 0; i < this.props.rating; i++) {
      stars.push(<i key={ i }className="icon ion-android-star"></i>);
    }
    while (!stars[4]) {
      stars.push(<i key={ i } className="icon ion-android-star-outline"></i>);
      i++;
    }
    return stars;
  }

  render() {
    return (
      <div className="spot-rating">
          { this.ratingStars() }<span>{this.props.numReviews}</span>
      </div>
    );
  }
}

export default RatingBlurb;
