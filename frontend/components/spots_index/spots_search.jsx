import React, { Component } from 'react';
import SpotsList from './spots_list';
import SpotsMap from './spots_map';

class SpotsIndex extends Component {

  constructor(props) {
    super(props);
    this.handleMouseover = this.handleMouseover.bind(this);
    // this.state = {
    //   hover: null
    // };
  }

  handleMouseover(e) {
    this.hover = e.currentTarget.getAttribute("spotid");
    // debugger
    // console.log(this.hover);
  }

  componentDidMount() {
    this.props.fetchSpots();
    this.props.addGlobalScroll();
    // console.log(this.child.heading.getDOMNode());
  }

  render() {
    return (
      <section className="spots-index">
        <SpotsList spots={this.props.spots} handleMouseover={this.handleMouseover}/>
        <SpotsMap hover={this.hover} spots={this.props.spots}/>
      </section>
    );
  }

}

export default SpotsIndex;
