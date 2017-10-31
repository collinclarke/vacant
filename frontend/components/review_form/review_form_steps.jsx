import React, { Component } from 'react';


class Overall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overall: 0
    };
  }

  render() {
    return(
      <section className="overall-form">
        <div className="review-header">
          <h1>How was your stay at {this.props.host}</h1>

        </div>

      </section>
    );
  }
}
