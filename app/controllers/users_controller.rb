class UsersController < ApplicationController

  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: {errors: user.errors}
    end
  end

end

# user1 token
# eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.WgNU0Qete6Lz82HVnopqH789Uo9n13IM7qr0BF_WYg4
