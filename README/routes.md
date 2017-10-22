#### Backend Routes

```ruby
Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :spots do
      resources :reviews, only: [:create, :update]
      resources :bookings, only: [:create, :destroy]
    end
    resources :watchings, only: [:create, :destroy]
    resources :users, only: [:create, :update, :destroy] do
      resources :reviews, only: [:create, :update]
    end
    resource :session, only: [:create, :destroy]

  end

end
```

#### Frontend routes

```javascript
<Route exact path="/spots/:id/#reviews" component={ReviewContainer}/>
<Route path="/spots/:id" component={SpotShowContainer}/>
<Route exact path="/spots" component={SpotsIndexContainer}/>
<Route exact path="/users/show/:id" component={UserShowContainer}/>
```
