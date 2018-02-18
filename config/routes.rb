Rails.application.routes.draw do

  scope '/api' do
    post '/users' => 'users#create'
    post '/login' => 'sessions#create'
    get '/quotes' => 'quotes#index'
    get '/quotes/my' => 'quotes#my'
    get '/quotes/random' => 'quotes#random'
    post '/quotes' => 'quotes#create'
    post '/quotes/add' => 'quotes#add'
    delete '/quotes/remove' => 'quotes#remove'
  end


end
