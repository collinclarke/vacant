import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import ReviewItem from './review_item'


class SpotShow extends Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    this.props.removeGlobalScroll();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  render() {

    const loading = this.props.loading;

    if (loading) {
      return <h1>loading</h1>;
    }

    if (this.props.spot) {
      const { title, address, price, kind, image_url, id, host, reviews } = this.props.spot;
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

          <section id="overview" className="spot-show-details">
            <div className="spot-show-title">{ title }</div>
            <div className="spot-show-subtitle">
              <div className="spot-show-type-address">
                { kind }<span className="list-bullet">&bull;</span>{ address }
              </div>
              <div className="spot-host-name">Hosted by {host}</div>
            </div>
          </section>

          <section className="spot-reviews">
            <ul>
            {reviews.map(reviewId => <ReviewItem key={reviewId} review={ this.props.reviews[reviewId] }/> ) }
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
