import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
      return (
        <section className="session-form">
          <h1>{ capitalize(formType.slice(1)) }</h1>
          <Link to={ alternative }>{ capitalize(alternative.slice(1)) }</Link>
          <form onSubmit={ this.handleSubmit }>
            <label>Username
              <input type="text" value={ this.state.username } onChange={ this.update('username') }/>
            </label>
            <label>Password
              <input type="text" value={ this.state.password } onChange={ this.update('password') }/>
            </label>
            <button>{ capitalize(formType.slice(1)) }</button>
            <section className="errors">
              <ul>
                { errors.map( (error, i) => <li key={i}>{ error }</li>) }
              </ul>
            </section>
          </form>
        </section>
      );
  }
}

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export default SessionForm;
