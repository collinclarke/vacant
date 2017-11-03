import React, { Component } from 'react';
import SpotIndexItem from '../spots_index/spot_index_item';

class BookingItem extends Component {

  render() {
    return (
      <div className="booking-item">
        <SpotIndexItem spot={this.props.spot}/>
        <div className="status"><span>Status:</span> {this.props.booking.status}</div>
        <div className="start-date-booking">{this.props.booking.start_date} - {this.props.booking.end_date}</div>
      </div>
    );
  }
}


export default BookingItem;
