import React, { Component } from 'react';
import SpotsList from './spots_list';
import SpotsMap from './spots_map';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
      <ReactCSSTransitionGroup component="section"
        className="spots-index"
        transitionName="fade-in"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
          <SpotsList loadSpots={this.props.loadSpots} loading={this.props.loading} spots={arrSpots} handleMouseover={this.handleMouseover}/>
          <SpotsMap updateBounds={this.props.updateBounds} hover={this.state.hover} spots={this.props.spots}/>
      </ReactCSSTransitionGroup>
    );
  }

}

export default SpotsIndex;
