import React, { Component } from 'react';

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
      formTypeLogin: this.props.formTypeLogin,
      hit: false,
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

  signupFields(action) {
    const altMessage = 'Log In';
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h1>{ action }</h1>
        <hr />
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
        <div className="loose">
          <label>Birthday</label>
          <p>To sign up, you must be 18 or older. Other people won't see your birthday</p>
        </div>
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
        <button>{ action }</button>
          <hr />
          <ul className="errors">
            {this.props.errors.map((error, i) => <li key={i}>{error.stack}</li>)}
          </ul>

          <section className="form-alternative">
            <span>Already have an account?</span>
            <p onClick={this.handleFormChange}>Log In</p>
          </section>
      </form>
    );
  }

  loginFields(action) {
    const altMessage = 'Sign Up';
    return (

      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1>{ action }</h1>
        <hr />
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

        <button>{ action }</button>
        <button className="demo-login" onClick={this.loginDemoUser}>Guest Login</button>
          <hr />
          <ul className="errors">
            {this.props.errors.map((error, i) => <li key={i}>{error.stack}</li>)}
          </ul>

          <section className="form-alternative">
            <span>Don't have an account?</span>
            <p onClick={this.handleFormChange}>Sign Up</p>
          </section>

      </form>
    );
  }


  render() {
    const { errors } = this.props;
    const { formTypeLogin } = this.state;
    const action = formTypeLogin ? "Log In" : "Sign Up";
    return formTypeLogin ? this.loginFields(action) : this.signupFields(action);
  }
}

export default SessionForm;
