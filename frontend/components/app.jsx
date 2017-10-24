import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <main className="full-screen">
      <header>
        <GreetingContainer />
      </header>
        <AuthRoute path='/login' component={ SessionFormContainer } />
        <AuthRoute path='/signup' component={ SessionFormContainer } />
    </main>
  );
};

export default App;
