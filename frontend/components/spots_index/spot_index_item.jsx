import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import RatingBlurb from '../widgets/rating_blurb';


class SpotIndexItem extends Component {

  render() {
    const { title, address, price, kind, image_url, id, ratings, numReviews } = this.props.spot;
    return (
      <li onMouseOver={this.props.handleMouseover} spotid={ id }>
        <Link to={`/spots/${id}`} className="spot-details">
          <div className="spot-item-image-wrapper">
            <img src= { image_url } alt="spot image"/>
          </div>
          <span className="spot-type">{ kind }</span>
          <span className="spot-title">{ title }</span>
          <span className="spot-price">From { price } per night</span>
          <RatingBlurb rating={ ratings } numReviews={ numReviews } />
        </Link>
      </li>
    );
  }
}

export default SpotIndexItem;
