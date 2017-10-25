import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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

            <hr />

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
