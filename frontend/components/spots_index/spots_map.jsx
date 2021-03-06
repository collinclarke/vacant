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

    this.MarkerManager.updateMarkers(this.props.spots);

    const { spots, hover } = props;
    this.arrSpots = Object.values(spots);

    if (hover && spots[hover]) {
      if (this.MarkerManager.markers[hover]) {

        this.MarkerManager.handleHover(spots[hover]);
      }
    }

    if (this.MarkerManager.markers) {
      Object.values(this.MarkerManager.markers)
      .forEach(marker => {
        if (marker.infowindow) {
          marker.infowindow.open(this.map);
        }
      });
    }
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);

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
      center: {lat: 40.7432, lng: -73.9547 },
      zoom: 13,
      gestureHandling: 'cooperative'
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);

    //listener for maps idle event
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateBounds(bounds);
    });

    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillUnmount() {
    google.maps.event.clearListeners(this.map, 'idle')
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
