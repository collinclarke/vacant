import React, { Component } from 'react';


class MarkerManager extends Component {

  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};
    this.bounds = new google.maps.LatLngBounds();
  }

  updateMarkers(spots){
    spots.forEach(spot => {
      if (!Object.keys(this.markers).includes(spot.id)) {
        this.markers[spot.id] = this.createMarkerfromSpot(spot);
      }
    });

  }

  createMarkerfromSpot(spot) {
    const { price, title, latitude, longitude } = spot;
    const position = new google.maps.LatLng(latitude, longitude);

    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const icon = iconBase + 'info-i_maps.png';

    const marker = new google.maps.Marker({
      position,
      title: spot.title,
      icon: ' ',
      map: this.map,
    });

    const infowindow = new google.maps.InfoWindow({
      maxWidth: 100,
      content: `<div id="price-marker"><div>$${price}</div></div>`
    });

    infowindow.addListener('mouseover', () => {
      this.map.setZoom(8);
      this.map.setCenter(marker.getPosition());
    });

    infowindow.open(this.map, marker);

    this.bounds.extend(position);
    this.map.fitBounds(this.bounds);
  }

  render() {
    return null;
  }

}

export default MarkerManager;
