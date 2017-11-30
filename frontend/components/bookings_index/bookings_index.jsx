import React, { Component } from 'react';
import BookingItem from './booking_item';
import { Link } from 'react-router-dom';
import lodash from 'lodash';

class BookingsIndex extends Component {

  componentDidMount() {
    this.props.fetchBookings();
    document.querySelector('header').classList.add('fixed');
  }

  bookingsHelper() {
    const arrBookings = Object.values(this.props.bookings);
    const index = [];
    arrBookings.forEach(booking => {
      const spot = this.props.spots[booking.spot_id];
      index.push(
        <BookingItem key={booking.id}
        id={booking.id}
        booking={booking}
        cancelBooking={this.props.cancelBooking}
        spot={spot}/>);
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
    return this.props.spots ? (
      <section className="bookings-index">
        { this.bookingsHelper() }
      </section>
    ) : (
      null
    );
  }
}

export default BookingsIndex;
