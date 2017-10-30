import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {},
    };
  }

  componentWillReceiveProps({ spots, hover }) {
    this.MarkerManager.updateMarkers(spots, hover);
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13,
      gestureHandling: 'cooperative'
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <section className="spots-map map" id="spots-map">
        <div id="map-container" ref="map"></div>
      </section>
    );
  }

}

export default SpotsMap;
