import React, { Component } from 'react';
import SpotsList from './spots_list';
import SpotsMap from './spots_map';
import * as ScrollApi from '../../util/scroll';

class SpotsIndex extends Component {
  constructor(){
    super();

    this.state = {
      scrollTop: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpots();
    this.scrollEl = document.getElementById('spots-list');
    this.fixedEl = document.getElementById('spots-map');
    this.main = document.querySelector('main');
    // this.fixedEl.addEventListener("wheel", ScrollApi.scroller, false);
    // this.scrollEl.addEventListener("wheel", ScrollApi.scroller, false);
    this.main.addEventListener("wheel", ScrollApi.scroller, false);
    // this.fixedEl.addEventListener("wheel", this.handleScroll, false);
    // this.scrollEl.addEventListener("wheel", this.handleScroll, false);
    console.log(this.fixedEl);
  }

  handleScroll(e) {
    this.setState({ scrollTop: e.deltaY });
  }

  render() {
    return (
      <section className="spots-index">
        <SpotsList spots={this.props.spots} scrollTop={ this.state.scrollTop }/>
        <SpotsMap spots={this.props.spots}/>
      </section>
    );
  }

}

export default SpotsIndex;
