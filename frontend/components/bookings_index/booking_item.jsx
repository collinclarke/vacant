import React, { Component } from 'react';
import SpotIndexItem from '../spots_index/spot_index_item';

class BookingItem extends Component {

  render() {
    return (
      <div className="booking-item">
        <SpotIndexItem spot={this.props.spot}/>
        <div>{this.props.booking.start_date}</div>
        <div>{this.props.booking.status}</div>
      </div>
    );
  }
}


export default BookingItem;
