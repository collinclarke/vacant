import React, { Component } from 'react';



class MarkerManager extends Component {

  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};
    this.bounds = new google.maps.LatLngBounds();
  }

  updateMarkers(spots){
    console.log('time to update');
    spots.forEach(spot => {
      if (!Object.keys(this.markers).includes(spot.id)) {
        this.markers[spot.id] = this.createMarkerfromSpot(spot);
      }
    });

  }

  createMarkerfromSpot(spot) {
    const { title, latitude, longitude } = spot;
    const position = new google.maps.LatLng(latitude, longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      title: spot.title
    });
    this.bounds.extend(position);
    this.map.fitBounds(this.bounds);
  }

  render() {
    return null;
  }

}

export default MarkerManager;
