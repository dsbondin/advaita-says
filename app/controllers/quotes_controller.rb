class QuotesController < ApplicationController

  def index
    render json: Quote.order(likes: :desc)
  end

  def random
    render json: Quote.order("RANDOM()").first
  end

  def create
    quote = Quote.new(quote_params)
    if quote.save
      render json: quote
    else
      render json: {error: "Something went wrong"}
  end

  def update
    quote = Quote.find_by(id: params.id)
    if quote
      quote.likes =+ 1
      quote.save
    else
      render json: {error: "Something went wrong"}
    end
  end

  private
    def quote_params
      params.require(:quote).permit(:content)
    end

end
