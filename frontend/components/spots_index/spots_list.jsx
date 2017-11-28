import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';
import lodash from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SpotsList extends Component {

  componentDidMount() {
    this.props.loadSpots();
  }

  spotRender() {
    return (
      this.props.spots.map( spot =>
        <SpotIndexItem
        handleMouseover={this.props.handleMouseover}
        className="spot-index-item" key={spot.id} spot={spot}
        />
      )
    );
  }

  noSpots() {
    return (
      <div id="no-spots">
      <img src="https://s3.us-east-2.amazonaws.com/vacant-pro/icons/missing.png"/> <span>No spots in this area yet!</span></div>
    );
  }

  render() {
    const {loading, spots}= this.props;
    if (loading) {
      return (
        <ReactCSSTransitionGroup
          className="loading-wrapper"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
          transitionName="errors">
          <div className="loading-spots">LOADING</div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return (
        <section className="spots-list" id="spots-list">
        <ul>
        { _.isEmpty(spots) ? this.noSpots() : this.spotRender() }
        </ul>
        </section>
      );
    }

  }
}

export default SpotsList;
