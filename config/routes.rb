Rails.application.routes.draw do

  post '/users' => 'users#create'
  post '/login' => 'sessions#create'
  get '/users/my' => 'users#my'
  get '/quotes/random' => 'quotes#random'
end
