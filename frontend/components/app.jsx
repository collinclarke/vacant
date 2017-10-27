import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SpotsIndexContainer from './spots_index/spots_index_container';
import SpotShowContainer from './spot_show/spot_show_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <main className="full-screen">
      <header>
        <a className="main-logo" href="/#/"><img src={ window.logoUrl } alt="Vacant Logo"/></a>
        <GreetingContainer />
      </header>

      <Route exact path='/' component={ SpotsIndexContainer } />
      <Route path='/:spotId' component={ SpotShowContainer } />
    </main>
  );
};

export default App;
