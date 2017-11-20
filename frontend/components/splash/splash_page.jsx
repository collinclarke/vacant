import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <section className="splash-page full-screen">
      <Link to='/spots'>
        <div id="splash-logo">
          <img src={ window.logoUrl } alt="Vacant Logo"/>
          <span>vacant</span>
        </div>
      </Link>

      <div id="splash-tag">
        A marketplace for unused real estate in NYC
      </div>

    </section>
  );
};
