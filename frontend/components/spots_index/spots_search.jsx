import React, { Component } from 'react';
import SpotsList from './spots_list';
import SpotsMap from './spots_map';

class SpotsIndex extends Component {

  componentDidMount() {
    this.props.fetchSpots();
    this.props.addGlobalScroll();
  }

  render() {
    return (
      <section className="spots-index">
        <SpotsList spots={this.props.spots}/>
        <SpotsMap spots={this.props.spots}/>
      </section>
    );
  }

}

export default SpotsIndex;
