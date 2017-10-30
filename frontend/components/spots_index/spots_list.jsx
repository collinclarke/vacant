import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';

class SpotsList extends Component {


  render() {
    return (
      <section className="spots-list" id="spots-list">
        <ul>
          { this.props.spots.map(spot => <SpotIndexItem
            handleMouseover={this.props.handleMouseover}
            className="spot-index-item" key={spot.id} spot={spot} />) }
        </ul>
      </section>
    );
  }
}

export default SpotsList;
