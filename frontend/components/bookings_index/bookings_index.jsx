import React, { Component } from 'react';
import BookingItem from './booking_item'

class BookingsIndex extends Component {

  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  bookingsHelper() {
    const arrBookings = Object.values(this.props.bookings);
    const index = [];
    arrBookings.forEach(booking => {
      const spot = this.props.spots[booking.spot_id];
      index.push(<BookingItem key={booking.id} booking={booking} spot={spot}/>);
    });
    return index;
  }

  render() {

    return (
      <section className="bookings-index">
        { this.bookingsHelper() }
      </section>
    );
  }
}

export default BookingsIndex;
