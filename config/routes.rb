Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:show, :index]
  end

end
