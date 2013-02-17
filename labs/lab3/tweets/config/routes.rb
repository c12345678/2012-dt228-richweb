Tweets::Application.routes.draw do
  get "tweets/index"

  get "tweets/new"

  get "tweets/create"

  get "tweets/destroy"

  root :to => 'tweets#index'

end
