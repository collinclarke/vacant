import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item';
import lodash from 'lodash';
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

      return (

        <section className="spots-list" id="spots-list">

        { loading &&
          <div className="loading-spots"><img src={window.loadingGif}/></div>
        }

        <ul>
          { _.isEmpty(spots) ? this.noSpots() : this.spotRender() }
        </ul>

        </section>
      );
    }

}

export default SpotsList;
