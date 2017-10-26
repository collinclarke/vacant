import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SpotIndexItem extends Component {

  render() {
    const { title, address, price, kind } = this.props.spot;
    return (
      <li>
        <img src= {window.placeholderImage} alt="spot image"/>
        <span className="spot-type">{ kind }</span>
        <span className="spot-title">{ title }</span>
        <span className="spot-title">From { price } per night</span>
        <span className="rating">rating thingy here</span>
      </li>
    );
  }
}

export default SpotIndexItem;
