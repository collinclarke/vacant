import React, { Component } from 'react';
import RatingBlurb from '../widgets/rating_blurb';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      residents: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange() {
    this.setState({formTypeLogin: !this.state.formTypeLogin});
  }

  handleSubmit(e) {
    e.preventDefault();
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
            <input required type="date" value={ this.state.startDate }
              onChange={ this.update('startDate') }/>
          </div>
          <div className="end-date">
            <label>Check Out</label>
            <input required type="date" value={ this.state.endDate }
              onChange={ this.update('endDate') }/>
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
