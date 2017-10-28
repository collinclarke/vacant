import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {},
    };
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.spots);
  }

  componentDidMount() {


    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13,
      scrollwheel: false,
      navigationControl: true
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    const marker = new google.maps.Marker({
      position: {lat: 37.7758, lng: -122.435 },
      map: this.map
    });

  }

  render() {
    return (
      <div id="map-container" ref="map"></div>
    );
  }

}

export default SpotMap;
