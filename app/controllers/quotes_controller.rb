class QuotesController < ApplicationController

  def my
    if current_user
      render json: {quotes: current_user.quotes.order(:id)}
    else
      render json: {errors: "Something went wrong"}
    end
  end

  def random
    render json: Quote.order("RANDOM()").first
  end

  def test
    render json: {test: "test"}
  end

  def create
    if current_user
      quote = current_user.quotes.build(content: params[:content])
      if quote.save
        current_user.quotes << quote
        render json: {
          quotes: current_user.quotes.order(:id),
          message: {
            type: "success",
            text: "Quote created successfully!"
          }
        }
      else
        render json: {errors: "Something went wrong."}
      end
    else
      render json: {errors: "You are not authorized. Please log in."}
    end
  end

  def add
    if current_user
      quote = Quote.find_by(id: params[:quote_id])
      if !!quote && current_user.quotes.include?(quote)
        render json: {
          quotes: current_user.quotes.order(:id),
          message: {
            type: "failure",
            text: "This quote is already in your collection."
            }
          }
      elsif !!quote
        current_user.quotes << quote
        quote.likes += 1
        render json: {
          quotes: current_user.quotes.order(:id),
          message: {
            type: "success",
            text: "Quote added successfully!"
            }
          }
      else
        render json: {errors: "This quote does not exist."}
      end
    else
      render json: {errors: "You are not authorized. Please log in."}
    end
  end

  def remove
    if current_user
      quote = Quote.find_by(id: params[:quote_id])
      if !!quote && current_user.quotes.include?(quote)
        current_user.quotes.delete(quote)
        quote.likes -=1
        render json: {
          quotes: current_user.quotes.order(:id),
          message: {
            type: "success",
            text: "Quote successfully removed from your collection."
          }
        }
      else
        render json: {errors: "This quote does not belong to your collection"}
      end
    else
      render json: {errors: "You are not authorized. Please log in."}
    end
  end

end
