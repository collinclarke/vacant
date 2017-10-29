import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {},
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentWillReceiveProps({ spots }) {
    this.MarkerManager.updateMarkers(spots);
  }

  componentDidMount() {

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13,
      gestureHandling: 'none'
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    const marker = new google.maps.Marker({
      position: {lat: 37.7758, lng: -122.435 },
      map: this.map
    });

  }

  onScroll(e) {
    this.props.handleScroll( e.deltaY );
  }

  render() {
    return (
      <section className="spots-map map" id="spots-map" ref="mapView">
        <div id="map-container" ref="map"></div>
      </section>
    );
  }

}

export default SpotsMap;
