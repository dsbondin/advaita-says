class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: {error: "Password doesn't match. Please try again."}
    end
  end

end
