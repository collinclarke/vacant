import React, { Component } from 'react';
import RatingBlurb from '../widgets/rating_blurb';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      residents: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(Object.assign({}, this.state, {
        user_id: this.props.currentUser.id,
        spot_id: this.props.spotId,
        status: 'PENDING'
      })
    );
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  dateFields() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <div className="heading">
          <span className="price">
            ${this.props.price}
          </span><span> per night</span>
          <RatingBlurb rating={ 4 } reviewTotal={ 45 } />
        </div>

        <hr />
        <div className="booking-dates">
          <div className="start-date">
            <label>Check In</label>
            <input required type="date" value={ this.state.start_date }
              onChange={ this.update('start_date') }/>
          </div>
          <div className="end-date">
            <label>Check Out</label>
            <input required type="date" value={ this.state.end_date }
              onChange={ this.update('end_date') }/>
          </div>
        </div>

        <div className="num-residents">
          <label>Guests</label>
          <input required type="number" value={ this.state.residents }
            onChange={ this.update('residents') }  placeholder="1"/>
        </div>

        <button>Request to Book</button>
        <span>You won't be charged yet</span>
        <hr />

      </form>
    );
  }


  render() {
    return this.dateFields();
  }
}

export default BookingForm;
