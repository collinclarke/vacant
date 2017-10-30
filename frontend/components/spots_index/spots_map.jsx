import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';

class SpotsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: {},
    };
  }

  componentWillReceiveProps(props) {
    const { spots, hover } = props;
    const arrSpots = Object.values(spots);
    this.map.fitBounds(this.MarkerManager.updateMarkers(arrSpots));
    if (hover) this.MarkerManager.handleHover(spots[hover]);
    if (this.MarkerManager.markers) {
      Object.values(this.MarkerManager.markers)
      .forEach(marker => {
        if (marker.infowindow) {
          marker.infowindow.open(this.map);
        }
      });
    }
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 16,
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
