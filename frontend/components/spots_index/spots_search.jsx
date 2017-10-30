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
    console.log(this.state);
    // debugger
    // console.log(this.hover);
  }

  componentDidMount() {
    this.props.fetchSpots();
    this.props.addGlobalScroll();
    // console.log(this.child.heading.getDOMNode());
  }

  render() {
    const arrSpots = Object.values(this.props.spots);
    return (
      <section className="spots-index">
        <SpotsList spots={arrSpots} handleMouseover={this.handleMouseover}/>

      </section>
    );
  }

}

export default SpotsIndex;
// <SpotsMap hover={this.state.hover} spots={this.props.spots}/>
