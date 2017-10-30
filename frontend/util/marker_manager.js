import React, { Component } from 'react';


class MarkerManager extends Component {

  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};
    this.bounds = new google.maps.LatLngBounds();
  }

  updateMarkers(spots, hover){
    spots.forEach(spot => {
      if (!Object.keys(this.markers).includes(spot.id)) {
        this.markers[spot.id] = this.createMarkerfromSpot(spot);
      }
      if (spot.id === hover) {
        this.handleHover(spot);
      }
    });


  }

  handleHover(spot) {
    this.markers[spot.id].setMap(null);
    this.markers[spot.id] = this.createMarkerfromSpot(spot, true);
  }

  createMarkerfromSpot(spot, hover) {
    const { id, price, title, latitude, longitude } = spot;
    const position = new google.maps.LatLng(latitude, longitude);

    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const icon = iconBase + 'info-i_maps.png';

    const marker = new google.maps.Marker({
      position,
      title: spot.title,
      icon: ' ',
      price: price,
      map: this.map,
    });


    const content = hover ? `
      <div class="price-marker list-hover" ref="${id}">
        <div>$${ price }</div>
      </div>
    ` : `
      <div class="price-marker" ref="${id}">
        <div>$${ price }</div>
      </div>
    `;
    
    const infowindow = new google.maps.InfoWindow({
      maxWidth: 100,
      content: content,
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
