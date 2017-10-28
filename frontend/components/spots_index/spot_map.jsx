import React, { Component } from 'react';


class SpotMap extends Component {

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return (
      <div id="map-container" ref="map"></div>
    );
  }

}

export default SpotMap;
