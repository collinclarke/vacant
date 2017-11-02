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
    this.arrSpots = Object.values(spots);

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

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidMount() {
    const mapOptions = {
      center: {lat: 40.760815, lng: -73.972042 },
      zoom: 14,
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

  render() {
    return (
      <section className="spots-map map" id="spots-map">
        <div id="map-container" ref="map"></div>
      </section>
    );
  }

}

export default SpotsMap;
