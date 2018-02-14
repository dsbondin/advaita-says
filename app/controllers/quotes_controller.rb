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

  def add
    if current_user
      quote = Quote.find_by(id: params[:quote_id])
      if !!quote && current_user.quotes.include?(quote)
        render json: {errors: "This quote is already in your collection"}
      elsif !!quote
        current_user.quotes << quote
        render json: current_user.quotes
      else
        render json: {errors: "This quote does not exist"}
      end
    else
      render json: {errors: "You are not authorized. Please log in."}
    end
  end

  private
    def quote_params
      params.require(:quote).permit(:content)
    end

end
