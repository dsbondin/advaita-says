class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if !user
      render json: { errors: { username: "Username not found. Please try again or register." } }
    elsif user.authenticate(params[:password])
      token = encode_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: { errors: { password: "Wrong password for this username. Please try again." } }
    end
  end

end
