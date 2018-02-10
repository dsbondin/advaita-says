class CreateUsersQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :users_quotes do |t|
      t.integer :user_id
      t.integer :quote_id

      t.timestamps
    end
  end
end
