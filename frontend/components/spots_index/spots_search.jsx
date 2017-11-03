import React, { Component } from 'react';
import SpotsList from './spots_list';
import SpotsMap from './spots_map';

class SpotsIndex extends Component {

  constructor(props) {
    super(props);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.state = {
      hover: null
    };
  }

  handleMouseover(e) {
    this.setState({hover: e.currentTarget.getAttribute("spotid")});

  }

  componentDidMount() {
    this.props.addGlobalScroll();
    document.querySelector('header').classList.add('fixed');
  }

  render() {
    const arrSpots = Object.values(this.props.spots);
    return (
      <section className="spots-index">
        <SpotsList spots={arrSpots} handleMouseover={this.handleMouseover}/>
        <SpotsMap updateBounds={this.props.updateBounds} hover={this.state.hover} spots={this.props.spots}/>
      </section>
    );
  }

}

export default SpotsIndex;
