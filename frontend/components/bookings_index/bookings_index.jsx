import React, { Component } from 'react';
import BookingItem from './booking_item';
import { Link } from 'react-router-dom';
import lodash from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BookingsIndex extends Component {

  componentDidMount() {
    this.props.fetchBookings();
    document.querySelector('header').classList.add('fixed');
  }

  bookingsHelper() {
    const arrBookings = Object.values(this.props.bookings);

    const index = arrBookings.map(booking => {
      const spot = this.props.spots[booking.spot_id];
      return (
      <ReactCSSTransitionGroup
          key={booking.id}
          transitionName="fade-in"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >
        <BookingItem
        id={booking.id}
        booking={booking}
        cancelBooking={this.props.cancelBooking}
        spot={spot}/>
      </ReactCSSTransitionGroup>
      );
    });

    if (_.isEmpty(index)) {
      return this.noBookings();
    } else {
      return index;
    }
  }

  noBookings() {
    return (
      <div id="no-bookings">
      <img src="https://s3.us-east-2.amazonaws.com/vacant-pro/icons/missing.png"/> <span>No bookings yet!</span>
      <Link to="/spots">Back to spots</Link></div>
    );
  }

  render() {
    const {spots, loading} = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName="fade-in"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500} >

      <section className="bookings-index">
      { loading &&
        <div className="loading-bookings">
          <img src={window.loadingGif}/>
        </div>
      }
            { this.bookingsHelper() }
      </section>
      </ReactCSSTransitionGroup>
    )
  }
}

export default BookingsIndex;
