import React, { Component } from 'react';


class SpotShow extends Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    return (
      <h1>WHATSUPPP</h1>
    );
  }
}

export default SpotShow;
