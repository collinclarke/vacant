import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  render() {

    return (
      <section className="greeting">
        <p>Welcome { this.props.currentUser.username }!</p>
        <button type="logout" onClick={this.props.logout}>Logout</button>
      </section>
    );
  }
}

export default Greeting;
