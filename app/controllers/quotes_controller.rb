class QuotesController < ApplicationController

  def index
    render json: Quote.order(likes: :desc)
  end

  def my
    if current_user
      render json: current_user.quotes
    else
      render json: {errors: "Something went wrong"}
    end
  end

  def random
    render json: Quote.order("RANDOM()").first
  end

  def create
    if current_user
      quote = current_user.quotes.build(content: params[:content])
      if quote.save
        current_user.quotes << quote
        render json: current_user.quotes
      else
        render json: {errors: "Something went wrong"}
      end
    else
      render json: {errors: "You are not authorized to add new quotes"}
    end
  end

  private
    def quote_params
      params.require(:quote).permit(:content)
    end

end
