import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import ReviewItem from './review_item';
import BookingFormContainer from '../booking_form/booking_form_container';

class SpotShow extends Component {

  constructor() {
    super();

  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    this.props.removeGlobalScroll();
    document.querySelector('header').classList.remove('fixed');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  reviewHelper() {
    const { reviews } = this.props.spot;
    return reviews.map(reviewId => {
      return <ReviewItem key={reviewId} review={ this.props.reviews[reviewId] }/>;
    });
  }

  render() {
    const loading = this.props.loading;

    if (loading) {
      return <h1>loading</h1>;
    }

    if (this.props.spot) {
      const { title, address, price, kind, image_url, id, host, reviews, ratings } = this.props.spot;
      return (
        <section className="spot-show">

          <section className="spot-show-image">
            <img src= { image_url } alt="spot image"/>
          </section>

          <nav id="spot-show-nav">
            <ul>
              <li><Scrollchor to="">Overview</Scrollchor></li>
              <li>
                <span className="list-bullet">&bull;</span>
                <Scrollchor to="">Reviews</Scrollchor>
              </li>
              <li>
                <span className="list-bullet">&bull;</span>
                <Scrollchor to="">The Host</Scrollchor>
              </li>
              <li>
                <span className="list-bullet">&bull;</span>
                <Scrollchor to="">Location</Scrollchor>
              </li>
            </ul>
          </nav>

          <section id="booking-form">
            <BookingFormContainer price={ price }/>
          </section>

          <section id="overview" className="spot-show-details">
            <div className="spot-show-title">{ title }</div>
            <div className="spot-show-subtitle">
              <div className="spot-show-type-address">
                { kind }<span className="list-bullet">&bull;</span>{ address }
              </div>
              <div className="spot-host-name">Hosted by {host}</div>
            </div>
          </section>

          <section className="spot-ratings">
              { ratings.overall }
          </section>

          <section className="spot-reviews">
            <ul>
            {this.reviewHelper()}
            </ul>
          </section>

        </section>
      );
    } else {
      return null;
    }
  }
}

export default SpotShow;
