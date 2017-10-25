import React from 'react';
import { Route } from 'react-router-dom';
import SessionNavContainer from './session/session_nav_container';
import { AuthRoute } from '../util/route_util';



const App = () => {
  return (
    <main className="full-screen">
      <header>
        <SessionNavContainer />
      </header>

    </main>
  );
};

export default App;
