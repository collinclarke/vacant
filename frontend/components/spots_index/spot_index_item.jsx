import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SpotIndexItem extends Component {

  render() {
    const { title, address, price, kind, image_url, id } = this.props.spot;
    return (
      <li>

        <Link to={`/${id}`} className="spot-details">
          <img src= { image_url } alt="spot image"/>
          <span className="spot-type">{ kind }</span>
          <span className="spot-title">{ title }</span>
          <span className="spot-price">From { price } per night</span>
          <span className="spot-rating">
            <i className="icon ion-android-star"></i>
            <i className="icon ion-android-star"></i>
            <i className="icon ion-android-star"></i>
            <i className="icon ion-android-star"></i>
            <i className="icon ion-android-star"></i>
            <p id="num-of-reviews">47</p>
          </span>
        </Link>
      </li>
    );
  }
}

export default SpotIndexItem;
