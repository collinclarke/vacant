import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SpotsSearchContainer from './spots_index/spots_search_container';
import SpotShowContainer from './spot_show/spot_show_container';
import BookingsIndexContainer from './bookings_index/bookings_index_container';
import ReviewFormContainer from './review_form/review_form_container';
import SplashPage from './splash/splash_page';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <main className="full-screen">
      <header className="fixed">
        <GreetingContainer />
      </header>
        <AuthRoute exact path='/spots/:spotId/newReview' component={ ReviewFormContainer } />
        <AuthRoute exact path='/bookings' component={ BookingsIndexContainer } />
        <Route exact path='/spots/:spotId' component={ SpotShowContainer } />
        <Route exact path='/spots' component={ SpotsSearchContainer } />
        <Route exact path='/' component={ SplashPage } />
    </main>
  );
};

export default App;
