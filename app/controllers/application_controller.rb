class ApplicationController < ActionController::API

  def encode_token(payload)
    JWT.encode(payload, "nisarga")
  end

  def current_user
    if token = request.headers["Token"]
      decoded_token = JWT.decode(token, "nisarga", true, {algorithm: "HS256"})
      user_id = decoded_token[0]["user_id"]
      User.find_by(id: user_id)
    end
  end

end
