import React, { Component } from 'react';
import RatingBlurb from '../widgets/rating_blurb';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requested: false,
      start_date: null,
      end_date: null,
      residents: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  requested(currentUser) {
    return currentUser ? (
      currentUser.bookings.includes(parseInt(this.props.match.params.spotId))
    ) : ( false );
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
    ).then(() => this.setState({requested: true}));
  }

  componentWillReceiveProps(nextProps) {
    const user = nextProps.currentUser;
    if (user) {
      this.setState({requested: this.requested(user)});
    }
  }

  componentDidMount() {
    const user = this.props.currentUser;
    if (user) {
      this.setState({requested: this.requested(user)});
    }
  }

  bookingErrors() {
    if (this.props.errors[0]) {
      return (
        <div key="errors" className="login-errors booking-errors">
          <p>Please enter check-in / check-out dates</p>
        </div>
      );
    }
  }

  generateErrors(errors) {
    return errors.map(error => <p key={error} className="error">{error}</p>);
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
        <ReactCSSTransitionGroup
          className="login-errors-wrapper"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
        { this.bookingErrors() }
        </ReactCSSTransitionGroup>
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

        <button type="button" onClick={this.handleSubmit}>
          { this.props.currentUser ? "Request to Book" : "Sign up to Book"}
        </button>
        <span>You won't be charged yet</span>

        <hr />

      </form>
    );
  }


  render() {
    return this.state.requested ? (
      <div className="booking-form spot-requested">
        <p>Spot Requested</p>
        <Link to={`/spots/${this.props.spotId}/newReview`}><button type="button">Leave a Review!</button></Link>
        <div className="relative">
          <hr />
          <div className="line-splitter">or</div>
        </div>
        <Link to={`/bookings`}>See All Bookings</Link>

      </div>
    ) : this.dateFields();
  }
}

export default BookingForm;
