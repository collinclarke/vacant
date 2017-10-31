import React, { Component } from 'react';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      residents: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange() {
    this.setState({formTypeLogin: !this.state.formTypeLogin});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state, {
      birth_date: this.birthday()
    });
    return this.state.formTypeLogin ? this.props.login(user) :
    this.props.signup(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  dateFields() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>

        <div className="booking-dates">
          <div className="start-date">
            <input type="date" value={ this.state.startDate }
              onChange={ this.update('startDate') } placeholder="mm/dd/yyyy"/>
          </div>
          <div className="end-date">
            <input type="date" value={ this.state.endDate }
              onChange={ this.update('endDate') } placeholder="mm/dd/yyyy"/>
          </div>
        </div>

        <div className="num-residents">
          <input type="number" value={ this.state.residents }
            onChange={ this.update('residents') }  placeholder="1"/>
        </div>

        <button>Request to Book</button>
        <span>You won't be charged yet</span>

      </form>
    );
  }


  render() {
    return dateFields();
  }
}

export default BookingForm;
