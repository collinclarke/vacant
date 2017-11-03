import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <section className="splash-page full-screen">
      <Link to='/spots'><img src={ window.logoUrl } alt="Vacant Logo"/>vacant</Link>
      <div>A place for<br /> creatives to find space.</div>
    </section>
  );
};
