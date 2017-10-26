import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birth_day: "Day",
      birth_month: "Month",
      birth_year: "Year",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  componentWillReceiveProps(newProps) {
   if (newProps.loggedIn) {
     this.props.history.push('/');
   }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state, {
      birth_date: this.birthday()
    });
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  birthday() {
    const {birth_day, birth_month, birth_year} = this.state;
    const birthday = `${birth_year}-${birth_month}-${birth_day}`;
    return birthday;
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

  loginDemoUser() {
    const demo = {email:"demovacantuser@gmail.com", password:"starwars"};
    this.props.demoLogin(demo);
  }

  signupFields() {
    return (
      <section className="signup-inputs">

        <div className="session-form-input">
          <input id="email" type="text" value={ this.state.email }
            onChange={ this.update('email') } placeholder="Email Address"/>
          <i id="i-email" className="icon ion-ios-email-outline"></i>
        </div>

        <div className="session-form-input">
          <input id="first-name" type="text" value={ this.state.first_name }
            onChange={ this.update('first_name') } placeholder="First Name"/>
          <i className="icon ion-ios-person-outline i-email"></i>
        </div>

        <div className="session-form-input">
          <input id="last-name" type="text" value={ this.state.last_name }
            onChange={ this.update('last_name') } placeholder="Last Name"/>
          <i className="icon ion-ios-person-outline i-email"></i>
        </div>

        <div className="session-form-input">
          <input type="password" value={ this.state.password }
            onChange={ this.update('password') }  placeholder="Password"/>
          <i className="icon ion-ios-locked-outline i-pw"></i>
        </div>

        <label className="loose">Birthday</label>
        <p className="loose">To sign up, you must be 18 or older. Other people won't see your birthday</p>
        <div className="session-form-birthday">
          <label className="select">
            <select id="birth-month" defaultValue="Month" onChange={ this.update('birth_month') }>
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

      </section>
    );
  }

  loginFields() {
    return (
      <section className="login-inputs">
        <div className="session-form-input">
          <input id="email" type="text" value={ this.state.email }
            onChange={ this.update('email') } placeholder="Email Address"/>
          <i className="icon ion-ios-email-outline i-email"></i>
        </div>

        <div className="session-form-input">
          <input type="password" value={ this.state.password }
            onChange={ this.update('password') }  placeholder="Password"/>
          <i className="icon ion-ios-locked-outline i-pw"></i>
        </div>
      </section>
    );
  }


  render() {
    const { formType, errors } = this.props;
    const alternative = formType === '/login' ? '/signup' : '/login';
    const altMessage = formType === '/login' ? 'Sign Up' : 'Log In';
    const message = formType === '/login' ? "Don't have an account?" :
      "Already have an account?";
    const action = formType === '/login' ? "Log In" : "Sign Up";

      return (
        <div className="modal-overlay-dark">
          <section className="session-form">

            <i onClick={() => this.props.history.push('/') } className="icon ion-ios-close-empty modal-close"></i>
            <h1>{ action }</h1>
            <hr />
            <form onSubmit={this.handleSubmit}>

              { formType === '/login' ? this.loginFields() : this.signupFields() }

              <button>{ action }</button>

            </form>

            <button className="demo-login" onClick={this.loginDemoUser}>Guest Login</button>

            <hr />

            <section className="errors">
              <ul>
                {this.props.errors.map((error, i) => <li key={i}>{error.stack}</li>)}
              </ul>
            </section>

            <section className="form-alternative">
              <span>{ message }</span>
              <Link onClick={() => this.props.clearErrors()} to={ alternative }>{ altMessage }</Link>
            </section>

          </section>
        </div>
      );
  }
}

export default SessionForm;
