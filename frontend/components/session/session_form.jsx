import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  render() {
    const { formType } = this.props;
    const action = formType === 'login' ? "Log In" : "Sign Up";

      return (
        <form onSubmit={ this.handleSubmit }>
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

        </form>
      );
  }
}

export default SessionForm;
