import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';


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
      const { title, address, price, kind, image_url, id, host_id } = this.props.spot;
      return (
        <section className="spot-show">

          <section className="spot-show-image">
            <img src= { image_url } alt="spot image"/>
          </section>

          <nav id="spot-show-nav">
            <ul>
              <li><Scrollchor to="">Overview</Scrollchor></li>
              <li>
                <span className="list-bullet">&bull;</span>
                <Scrollchor to="">Reviews</Scrollchor>
              </li>
              <li>
                <span className="list-bullet">&bull;</span>
                <Scrollchor to="">The Host</Scrollchor>
              </li>
              <li>
                <span className="list-bullet">&bull;</span>
                <Scrollchor to="">Location</Scrollchor>
              </li>
            </ul>
          </nav>

          <section id="overview" className="spot-show-details">
            <span className="spot-show-title">{ title }</span>
            <ul className="spot-show-subtitle">
              <li className="spot-show-type">{ kind }</li>
              <li className="spot-show-address"><span className="list-bullet">&bull;</span>{ address }</li>
              <li className="spot-host-name">Hosted by host #{host_id}</li>
            </ul>
          </section>

          <section className="spot-placeholder">
            fake info
          </section>

        </section>
      );
    } else {
      return null;
    }
  }
}

export default SpotShow;
