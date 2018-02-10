class Quote < ApplicationRecord
  has_many :users_quotes
  has_many :users, through: :users_quotes
end
