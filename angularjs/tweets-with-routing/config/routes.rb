Tweets::Application.routes.draw do
  resources :tweets do
    member do
      get 'home'
    end
  end

  root :to => 'tweets#home'

end
