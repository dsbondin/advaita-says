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
      quote = Quote.new(content: params[:content])
      quote.author = Author.last
      current_user.quotes << quote
      if quote.save
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
        quote.save
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
        quote.likes -= 1 unless quote.likes = 0
        quote.save
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
