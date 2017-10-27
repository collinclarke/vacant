import React, { Component } from 'react';


class SpotShow extends Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  render() {

    const loading = this.props.loading;

    if (loading) {
      return <h1>loading</h1>;
    }

    if (this.props.spot) {
      const { title, address, price, kind, image_url, id } = this.props.spot;
      return (
        <section className="spot-show">
          <section className="spot-show-image">
            <img src= { image_url } alt="spot image"/>
          </section>
          <section className="spot-show-details">
            <span className="spot-type">{ kind }</span>
            <span className="spot-title">{ title }</span>
            <span className="spot-price">From { price } per night</span>
            <span className="spot-rating">
              <i className="icon ion-android-star"></i>
              <i className="icon ion-android-star"></i>
              <i className="icon ion-android-star"></i>
              <i className="icon ion-android-star"></i>
              <i className="icon ion-android-star"></i>
              <p id="num-of-reviews">47</p>
            </span>
          </section>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default SpotShow;
