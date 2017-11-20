import React, { Component } from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTypeLogin: this.props.formTypeLogin
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleFormChange() {
    this.setState({formTypeLogin: !this.state.formTypeLogin});
    this.props.clearErrors();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  closeModal() {
    this.props.closeModal();
  }

  handleSubmit(user) {
    if (this.state.formTypeLogin) {
      this.props.login(user).then(this.closeModal, null).then(() => {
        if (this.props.history.location.pathname === "/") {
          this.props.history.push(`/spots`);
        }
      });
    } else {
      this.props.signup(user).then(this.closeModal, null).then(() => {
        if (this.props.history.location.pathname === "/") {
          this.props.history.push(`/spots`);
        }
      });
    }
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demo = {email:"demovacantuser@gmail.com", password:"starwars"};
    this.props.login(demo).then(this.props.closeModal()).then(() => {
      if (this.props.history.location.pathname === "/") {
        this.props.history.push(`/spots`);
      }
    });
  }

  render() {
    const { formTypeLogin } = this.state;
    return formTypeLogin ? (
      <LoginForm errors={this.props.errors}
        closeModal={this.closeModal}
        handleSubmit={this.handleSubmit}
        handleFormChange={this.handleFormChange}
        loginDemoUser={this.loginDemoUser}
        clearErrors={this.props.clearErrors}
      />
    ) : (
      <SignupForm errors={this.props.errors}
        closeModal={this.closeModal}
        handleSubmit={this.handleSubmit}
        handleFormChange={this.handleFormChange}
        clearErrors={this.props.clearErrors}
      />
    );
  }
}

export default SessionForm;
