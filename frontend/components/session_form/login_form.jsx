import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.handleSubmit(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.clearErrors();
      Object.values(this.refs).forEach(ref => ref.classList.remove('error-highlight'));
    };
  }

  loginErrors() {
    if (this.props.errors[0]) {
      return (
        <div key="errors" className="login-errors">
          <i className="icon ion-alert-circled"></i>
          { this.generateError(this.props.errors[0]) }
        </div>
      );
    }
  }

  generateError(error, i) {
    return (
      <p className="error" key={i}>{error}</p>
    );
  }

  render () {
    const altMessage = 'Sign Up';
    return (
        <form className="login-form">
          <h1>Log In</h1>
          <hr />
            <ReactCSSTransitionGroup
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              transitionName="errors">
              { this.loginErrors() }
            </ReactCSSTransitionGroup>

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

          <button type="button" onClick={this.handleSubmit}>Log In</button>
          <button type="button" className="demo-login"
            onClick={this.props.loginDemoUser}>
            Guest Login
          </button>
            <hr />

            <section className="form-alternative">
              <span>Don't have an account?</span>
              <p onClick={this.props.handleFormChange}>Sign Up</p>
            </section>

        </form>
    );
  }
}

export default LoginForm;
