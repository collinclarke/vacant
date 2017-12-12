import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import RatingBlurb from '../widgets/rating_blurb';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class SpotIndexItem extends Component {
  constructor(props) {
    super(props)
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded (e) {
    const cl = e.target.classList
    cl.remove("hidden");
    cl.add("img-transition")
  }

  render() {
      const { title, address, price, kind, image_url, id, ratings, numReviews } = this.props.spot;
      return (
        <li onMouseOver={this.props.handleMouseover} spotid={ id }>
          <Link to={`/spots/${id}`} className="spot-details">
            <div className="spot-item-image-wrapper">

              <img
                className="hidden"
                onLoad={this.imageLoaded}
                src= { image_url } alt="spot image"/>
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
