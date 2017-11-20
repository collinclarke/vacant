#### Backend Routes

```ruby
root to: "static_pages#root"

namespace :api, defaults: { format: :json } do
  resources :users, only: [:create, :update, :destroy]
  resources :bookings, only: [:index]
  resource :session, only: [:create, :destroy]
  resources :spots, only: [:show, :index] do
    resources :reviews, only: [:index, :create]
    resources :bookings, only: [:create]
  end
end
```

#### Frontend routes

```javascript
<AuthRoute exact path='/spots/:spotId/newReview' component={ ReviewFormContainer } />
<AuthRoute exact path='/bookings' component={ BookingsIndexContainer } />
<Route exact path='/spots/:spotId' component={ SpotShowContainer } />
<Route exact path='/spots' component={ SpotsSearchContainer } />
<Route exact path='/' component={ SplashPage } />
```
