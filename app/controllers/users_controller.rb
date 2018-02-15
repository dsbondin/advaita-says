class UsersController < ApplicationController

  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: {signup_errors: user.errors}
    end
  end

end
