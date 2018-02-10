class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.text :content
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end
