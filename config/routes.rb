Rails.application.routes.draw do

  post '/users' => 'users#create'
  post '/login' => 'sessions#create'
  get '/users/my' => 'users#my'
end
