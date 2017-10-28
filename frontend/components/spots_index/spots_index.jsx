import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';
import SpotMap from './spot_map';

class SpotsIndex extends Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
      <section className="spots-index">
        <section className="spots-list">
          <ul>
            { this.props.spots.map(spot => <SpotIndexItem
              className="spot-index-item" key={spot.id} spot={spot} />) }
          </ul>
        </section>
        <section className="spots-map map">
          <SpotMap />
        </section>
      </section>
    );
  }

}

export default SpotsIndex;
