import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';

class SpotsIndex extends Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <section className="spots-index">
        <ul>
          { this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />) }
        </ul>
      </section>
    );
  }

}

export default SpotsIndex;
