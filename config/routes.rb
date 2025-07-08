Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  resources :emails, only: [ :index, :show ]
  root "emails#index"
end
