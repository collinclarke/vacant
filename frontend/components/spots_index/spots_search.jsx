import React, { Component } from 'react';
import SpotsList from './spots_list';
import SpotsMap from './spots_map';
import { scroller } from '../../util/scroll';

class SpotsIndex extends Component {

  componentDidMount() {
    this.props.fetchSpots();
    this.main = document.querySelector('main');
    this.main.addEventListener("wheel", scroller, false);
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
