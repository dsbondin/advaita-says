class AuthorsController < ApplicationController

  def index
    render json: Author.all
  end
  
end
