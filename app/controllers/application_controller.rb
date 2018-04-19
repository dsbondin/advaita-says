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

  def add_quote(quote)
    current_user.quotes << quote
    quote.likes += 1
    quote.save
  end

  def remove_quote(quote)
    current_user.quotes.delete(quote)
    quote.likes -= 1 unless quote.likes == 0
    quote.save
  end

end
