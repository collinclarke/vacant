import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birth_day: "Day",
      birth_month: "Month",
      birth_year: "Year"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state, this.birthday());
    this.props.handleSubmit(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.clearErrors();
      Object.values(this.refs).forEach(ref => ref.classList.remove('error-highlight'));
    };
  }

  birthday() {
    const {birth_day, birth_month, birth_year} = this.state;
    const birthday = `${birth_year}-${birth_month}-${birth_day}`;
    return ({ birth_date: birthday });
  }

  dates() {
    let dates = [];
    const now = new Date();
    for (let i=now.getFullYear(); i >= 1920 ; i--) {
      dates.push(<option key={i} value={`${i}`}>{ i }</option>);
    }
    return dates;
  }

  days() {
    let days = [];
    for (let i=1; i <= 9; i++) {
      days.push(<option key={i} value={`0${i}`}>{ i }</option>);
    }
    for (let i=10; i <= 31; i++) {
      days.push(<option key={i} value={`${i}`}>{ i }</option>);
    }
    return days;
  }

  generateSignupError(error, i, bday) {
    return bday ? (
      <div className="bday-errors" key={i}>
        <p className="error">{error}</p>
      </div>
    ) : (
      <div className="signup-errors" key={i}>
        <p className="error">{error}</p>
      </div>
    );
  }

  signupError(idx, bday) {
    const error = this.props.errors[idx];
    if (error) {
      if (!bday) {
        this.refs[idx].classList.add('error-highlight');
      } else {
        this.refs[idx].classList.add('bday-error-highlight');
      }
      return this.generateSignupError(error, idx, bday);
    }
  }

  render() {
    const altMessage = 'Log In';
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h1>Signup</h1>
        <hr />

        <div ref="0" className="session-form-input">
          <input id="email" type="text" value={ this.state.email }
            onChange={ this.update('email') } placeholder="Email Address"/>
          <i id="i-email" className="icon ion-ios-email-outline"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError(0) }
        </ReactCSSTransitionGroup>

        <div ref="1" className="session-form-input">
          <input id="first-name" type="text" value={ this.state.first_name }
            onChange={ this.update('first_name') } placeholder="First Name"/>
          <i className="icon ion-ios-person-outline i-email"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError(1) }
        </ReactCSSTransitionGroup>

        <div ref="2" className="session-form-input">
          <input id="last-name" type="text" value={ this.state.last_name }
            onChange={ this.update('last_name') } placeholder="Last Name"/>
          <i className="icon ion-ios-person-outline i-email"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError(2) }
        </ReactCSSTransitionGroup>

        <div ref="4" className="session-form-input">
          <input type="password" value={ this.state.password }
            onChange={ this.update('password') }  placeholder="Password"/>
          <i className="icon ion-ios-locked-outline i-pw"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError(4) }
        </ReactCSSTransitionGroup>

        <div className="loose">
          <label>Birthday</label>
          <p>To sign up, you must be 18 or older. Other people won't see your birthday</p>
        </div>
        <div ref="3" className="session-form-birthday">
          <label className="select">
            <select  id="birth-month" defaultValue="Month" onChange={ this.update('birth_month') }>
              <option value="Month" disabled>Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </label>
          <label className="select">
            <select id="birth-day" defaultValue="Day" onChange={ this.update('birth_day') }>
              <option value="Day" disabled>Day</option>
              { this.days() }
            </select>
          </label>
          <label className="select">
            <select id="birth-year" defaultValue="Year" onChange={ this.update('birth_year') }>
              <option value="Year" disabled>Year</option>
              { this.dates() }
            </select>
          </label>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError(3, true) }
        </ReactCSSTransitionGroup>

        <button>Sign Up</button>
        <hr />

        <section className="form-alternative">
          <span>Already have an account?</span>
          <p onClick={this.props.handleFormChange}>Log In</p>
        </section>
      </form>
    );
  }

}

export default SignupForm;
