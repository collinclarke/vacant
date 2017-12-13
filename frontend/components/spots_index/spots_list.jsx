import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';
import lodash from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class SpotsList extends Component {

  componentDidMount() {
    this.props.loadSpots();
  }

  spotRender() {

    const { spots } = this.props;

    if (_.isEmpty(spots) ) {
      return this.noSpots();
    } else {
      return spots.map( spot =>
          <SpotIndexItem
          key={spot.id}
          handleMouseover={this.props.handleMouseover}
          className="spot-index-item" spot={spot} />
      )
    }

  }

  noSpots() {
    return (
      <div id="no-spots">
      <img src="https://s3.us-east-2.amazonaws.com/vacant-pro/icons/missing.png"/> <span>No spots in this area yet!</span></div>
    );
  }

  render() {
    const {loading, spots} = this.props;

      return (
        <section className="spots-list" id="spots-list">

          <ReactCSSTransitionGroup
            transitionName="fade-in"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            { loading &&
              <div className="loading-spots">
                <img src={window.loadingGif}/>
              </div>
             }
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            component="ul"
            transitionName="fade-in"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500} >
            { this.spotRender() }
        </ReactCSSTransitionGroup>
        </section>

      );
    }

}

export default SpotsList;
