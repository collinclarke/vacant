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
    this.errors = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      taken: ""
    };
  }

  handleErrors(errors) {
    if (!errors[0]) {
      this.errors = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birth_date: ""
      };
    } else {
      errors.forEach(error => {
        switch(error){
          case "Email can't be blank":
          this.errors.email = error;
          break;
          case "First name can't be blank":
          this.errors.first_name = error;
          break;
          case "Last name can't be blank":
          this.errors.last_name = error;
          break;
          case "Birth date can't be blank":
          this.errors.birth_date = error;
          break;
          case "Password is too short (minimum is 6 characters)":
          this.errors.password = error;
          break;
          case "Email has already been taken":
          this.errors.email = error;
          break;
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {errors} = nextProps;
    this.handleErrors(errors);
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
      Object.values(this.refs)
      .forEach(ref => ref.classList
        .remove('error-highlight', 'bday-error-highlight'));
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

  generateError(error, key, bday) {
    return bday ? (
      <div className="bday-errors" key={key}>
        <p className="error">{error}</p>
      </div>
    ) : (
      <div className="signup-errors" key={key}>
        <p className="error">{error}</p>
      </div>
    );
  }

  signupError(key, bday) {
    const error = this.errors[key];
    if (error) {
      if (!bday) {
        this.refs[key].classList.add('error-highlight');
      } else {
        this.refs[key].classList.add('bday-error-highlight');
      }
      return this.generateError(error, key, bday);
    }
  }

  render() {
    const altMessage = 'Log In';
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h1>Signup</h1>
        <hr />

        <div ref="email" className="session-form-input">
          <input id="email" type="text" value={ this.state.email }
            onChange={ this.update('email') } placeholder="Email Address"/>
          <i id="i-email" className="icon ion-ios-email-outline"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError("email") }
        </ReactCSSTransitionGroup>

        <div ref="first_name" className="session-form-input">
          <input id="first-name" type="text" value={ this.state.first_name }
            onChange={ this.update('first_name') } placeholder="First Name"/>
          <i className="icon ion-ios-person-outline i-email"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError("first_name") }
        </ReactCSSTransitionGroup>

        <div ref="last_name" className="session-form-input">
          <input id="last-name" type="text" value={ this.state.last_name }
            onChange={ this.update('last_name') } placeholder="Last Name"/>
          <i className="icon ion-ios-person-outline i-email"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError("last_name") }
        </ReactCSSTransitionGroup>

        <div ref="password" className="session-form-input">
          <input type="password" value={ this.state.password }
            onChange={ this.update('password') }  placeholder="Password"/>
          <i className="icon ion-ios-locked-outline i-pw"></i>
        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionName="errors">
          { this.signupError("password") }
        </ReactCSSTransitionGroup>

        <div className="loose">
          <label>Birthday</label>
          <p>To sign up, you must be 18 or older. Other people won't see your birthday</p>
        </div>
        <div ref="birth_date" className="session-form-birthday">
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
          { this.signupError("birth_date", true) }
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
