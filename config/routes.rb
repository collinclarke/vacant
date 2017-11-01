Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy] do
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:show, :index] do
      resources :reviews, only: [:index, :create]
      resources :bookings, only: [:create]
    end
  end

end
