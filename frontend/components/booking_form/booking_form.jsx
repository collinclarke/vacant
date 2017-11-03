import React, { Component } from 'react';
import RatingBlurb from '../widgets/rating_blurb';
import { Link } from 'react-router-dom';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: (new Date()),
      end_date: (new Date()),
      residents: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.openSessionModal();
      return;
    }
    this.props.createBooking(Object.assign({}, this.state, {
        user_id: this.props.currentUser.id,
        spot_id: this.props.spotId,
        status: 'PENDING'
      })
    );
  }

  requested() {
    const user = this.props.currentUser;
    const bookings = this.props.bookings;
    if (user) {
      return user.bookings.includes(this.props.spotId);
    }
    return false;
  }

  componentDidMount() {
    const user = this.props.currentUser;
    if (user) {
      this.props.fetchBookings(user.id);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  dateFields() {
    return (
      <form className="booking-form">
        <div className="heading">
          <span className="price">
          ${this.props.price}
          </span><span> per night</span>
          <RatingBlurb rating={ this.props.overall } numReviews={ this.props.numReviews } />
        </div>

        <hr />

        <div className="booking-dates">
          <div className="start-date">
            <label>Check In</label>
            <input required type="date" defaultValue={this.state.start_date}
              onChange={ this.update('start_date') }/>
          </div>
          <div className="end-date">
            <label>Check Out</label>
            <input required type="date" defaultValue={this.state.end_date}
              onChange={ this.update('end_date') }/>
          </div>
        </div>

        <div className="booking-errors">
          <ul>
            { this.props.errors.map(error => {<li>{error}</li>;} ) }
          </ul>
        </div>
        <div className="num-residents">
          <label>Guests</label>
          <input required type="number" value={ this.state.residents }
            onChange={ this.update('residents') }  placeholder="1"/>
        </div>

        <button onClick={this.handleSubmit}>
          { this.props.currentUser ? "Request to Book" : "Sign up to Book"}
        </button>
        <span>You won't be charged yet</span>

        <hr />

      </form>
    );
  }


  render() {
    return this.requested() ? (
      <div className="requested-notice booking-form">
        Spot Requested!
        <Link to={`/spots/${this.props.spotId}/newReview`}><button>Leave a Review!</button></Link>
      </div>
    ) : this.dateFields();
  }
}

export default BookingForm;
