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
      birth_date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
   if (newProps.loggedIn) {
     this.props.history.push('/');
   }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  signupFields() {
    return (
      <section className="signup-inputs">

        <div className="session-form-input">
          <input id="email" type="text" value={ this.state.email }
            onChange={ this.update('email') } placeholder="Email Address"/>
          <i className="icon ion-ios-email-outline i-email"></i>
        </div>

        <div className="session-form-input">
          <input id="first-name" type="text" value={ this.state.first_name }
            onChange={ this.update('first_name') } placeholder="First Name"/>
          <i className="icon ion-ios-user-outline i-email"></i>
        </div>

        <div className="session-form-input">
          <input id="last-name" type="text" value={ this.state.last_name }
            onChange={ this.update('last_name') } placeholder="Last Name"/>
          <i className="icon ion-ios-user-outline i-email"></i>
        </div>

        <div className="session-form-input">
          <input type="password" value={ this.state.password }
            onChange={ this.update('password') }  placeholder="Password"/>
          <i className="icon ion-ios-locked-outline i-pw"></i>
        </div>

        <label>Birthday</label>
        <div className="session-form-input">
          <input id="birthdate" type="date" value={ this.state.birth_date }
            onChange={ this.update('birth_date') }/>
          <i className="icon ion-ios-email-outline i-email"></i>
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
        <div className="full-screen modal">
          <section className="session-form">

            <i onClick={() => this.props.history.push('/') } className="icon ion-ios-close-empty modal-close"></i>
            <h1>{ action }</h1>
            <form onSubmit={this.handleSubmit}>

              { formType === '/login' ? this.loginFields() : this.signupFields() }

              <button>{ action }</button>

            </form>

            <hr />
            <section className="errors">
              <ul>
                {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
              </ul>
            </section>
            <span className="form-alternative">
              <span>{ message }</span>
              <Link onClick={() => this.props.clearErrors()} to={ alternative }>{ altMessage }</Link>
             </span>

          </section>
        </div>
      );
  }
}

export default SessionForm;
