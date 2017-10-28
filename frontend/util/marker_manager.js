import React, { Component } from 'react';



class MarkerManager extends Component {

  constructor(map) {
    super(map);
    this.geocoder = new google.maps.Geocoder();
    this.map = map;
    this.markers = {};
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
    const marker = new google.maps.Marker({
      position: spot.position,
      map: this.map,
      title: spot.title
    });
  }

  render() {
    return null;
  }

}

export default MarkerManager;
