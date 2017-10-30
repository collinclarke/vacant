import React, { Component } from 'react';


class MarkerManager extends Component {

  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};
    this.bounds = new google.maps.LatLngBounds();
    this.createMarkerfromSpot = this.createMarkerfromSpot.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
    this.hover = null;
  }

  updateMarkers(spots){
    const that = this;
    spots.forEach(spot => {
      if (!Object.keys(that.markers).includes(String(spot.id))) {
        that.markers[parseInt(spot.id)] = that.createMarkerfromSpot(spot);
      }
    });
    return this.bounds;
  }

  handleHover(spot) {
    if (this.hover) {
      this.markers[this.hover.id].infowindow.setContent(`
        <div class="price-marker" ref="${this.hover.id}">
          <div>$${ this.hover.price }</div>
        </div>
      `);
      const oldZ = this.markers[this.hover.id].infowindow.getZIndex();
      this.markers[this.hover.id].infowindow.setZIndex(oldZ-5);
    }
    this.markers[spot.id].infowindow.setContent(`
      <div class="price-marker" ref="${spot.id}">
        <div id="list-hover">$${ spot.price }</div>
      </div>
    `);
    const z = this.markers[spot.id].infowindow.getZIndex();
    this.markers[spot.id].infowindow.setZIndex(z+5);
    this.hover = spot;
    this.markers[spot.id].infowindow.close();
  }

  createMarkerfromSpot(spot, hover) {
    const { id, price, title, latitude, longitude } = spot;
    const position = new google.maps.LatLng(latitude, longitude);
    if (!hover) this.bounds.extend(position);
    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const icon = iconBase + 'info-i_maps.png';

    const marker = new google.maps.Marker({
      position,
      title: spot.title,
      icon: ' ',
      price: price,
      map: this.map,
    });


    const content = `
      <div class="price-marker" ref="${id}">
        <div>$${ price }</div>
      </div>
    `;

    const infowindow = new google.maps.InfoWindow({
      maxWidth: 100,
      content: content,
      disableAutoPan: true,
      position: position,
      zIndex: 5
    });


    return {
      marker,
      infowindow
    };

  }

  render() {
    return null;
  }

}

export default MarkerManager;
