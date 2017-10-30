class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.index :user_id
      t.integer :spot_id, null: false
      t.index :spot_id 
      t.integer :overall, null: false
      t.integer :user_impression, null: false
      t.integer :cleanliness, null: false
      t.string :cleanliness_note
      t.integer :accuracy, null: false
      t.string :accuracy_note
      t.integer :communication, null: false
      t.string :communication_note
      t.integer :check_in, null: false
      t.string :check_in_note
      t.integer :value, null: false
      t.string :value_note
      t.integer :location, null: false
      t.string :location_note
      t.string :private_note
      t.string :public_review
      t.string :response

      t.timestamps
    end
  end
end
