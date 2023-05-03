Rails.application.routes.draw do
  root "home#index"

  namespace :api do
    get 'messages/random'
  end
end
