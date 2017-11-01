import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SpotsSearchContainer from './spots_index/spots_search_container';
import SpotShowContainer from './spot_show/spot_show_container';
import BookingsIndexContainer from './bookings_index/bookings_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <main className="full-screen">
      <header className="fixed">
        <a className="main-logo" href="/#/"><img src={ window.logoUrl } alt="Vacant Logo"/></a>
        <GreetingContainer />
      </header>
      <Route exact path='/spots' component={ SpotsSearchContainer } />
      <Route exact path='/bookings' component={ BookingsIndexContainer } />
      <Route path='/spots/:spotId' component={ SpotShowContainer } />
    </main>
  );
};

export default App;
