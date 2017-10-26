import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SpotsIndexContainer from './spots_index/spots_index_container'
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <main className="full-screen">
      <header>
        <a className="main-logo" href="/#/"><img src={ window.logoUrl } alt="Vacant Logo"/></a>
        <GreetingContainer />
      </header>
      <Route path='/spots' component={ SpotsIndexContainer } />
      <AuthRoute path='/login' component={ SessionFormContainer } />
      <AuthRoute path='/signup' component={ SessionFormContainer } />
    </main>
  );
};

export default App;
