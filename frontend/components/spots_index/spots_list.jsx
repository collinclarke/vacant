import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';

class SpotsList extends Component {

  // componentDidUpdate() {
  //   this.refs.list
  // }
  componentDidUpdate() {
    console.log("index scrollTop: ", this.props.scrollTop);
    console.log("spots list updating, previous scrollTop:", this.refs.list.scrollTop );
    this.refs.list.scrollTop = this.props.scrollTop;
    console.log("new spot list scrolltop:", this.refs.list.scrollTop);
  }

  render() {
    return (
      <section className="spots-list" id="spots-list" ref="list">
        <ul>
          { this.props.spots.map(spot => <SpotIndexItem
            className="spot-index-item" key={spot.id} spot={spot} />) }
        </ul>
      </section>
    );
  }
}

export default SpotsList;
