Tweets::Application.routes.draw do
  resources :tweets, only: [:index, :create, :destroy]

  root :to => 'tweets#index'

end
