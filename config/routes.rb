Rails.application.routes.draw do

  post '/users' => 'users#create'
  post '/login' => 'sessions#create'
  get '/quotes' => 'quotes#index'
  get '/quotes/my' => 'quotes#my'
  get '/quotes/random' => 'quotes#random'
  post '/quotes' => 'quotes#create'
  post '/quotes/add' => 'quotes#add'
end
