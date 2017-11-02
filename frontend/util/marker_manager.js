class MarkerManager {

  constructor(map) {
    this.map = map;
    this.markers = {};
    this.bounds = new google.maps.LatLngBounds();
    this.hover = null;
  }

  updateMarkers(spotsObj) {
    const that = this;
    const spots = Object.values(spotsObj);
    debugger
    const filteredSpots = spots.filter(spot => !this.markers[spot.id]);
    filteredSpots.forEach(newSpot => this.createMarkerFromSpot(newSpot))


    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach(spotId => this.removeMarker(this.markers[spotId]));
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

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }

  createMarkerfromSpot(spot, hover) {
    const { id, price, title, latitude, longitude } = spot;
    const position = new google.maps.LatLng(latitude, longitude);
    // if (!hover) this.bounds.extend(position);
    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const icon = iconBase + 'info-i_maps.png';

    const marker = new google.maps.Marker({
      position,
      title: spot.title,
      spotId: spot.id,
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
