import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  render() {
    return (this.props.currentUser ?
      (
        <section className="greeting">
          <p>Welcome { this.props.currentUser.first_name}!</p>
          <button type="logout" onClick={this.props.logout}>Logout</button>
        </section>
      ) : (
        <section className="greeting">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </section>
      )
    );
  }
}

export default Greeting;
