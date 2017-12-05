import React, { Component } from 'react';
import SpotIndexItem from '../spots_index/spot_index_item';

class BookingItem extends Component {

  render() {
    const { id, spot, booking, cancelBooking } = this.props;
    return (
      <div className="booking-item">

        <SpotIndexItem spot={spot}/>
        <div className="status"><span>Status:</span> {booking.status}</div>
        <div className="start-date-booking">{booking.start_date} - {booking.end_date}</div>
        <div id="booking-removal" onClick={ () => {
          cancelBooking(id, spot.id);
        } }>Cancel booking</div>
      </div>
    );
  }
}


export default BookingItem;
