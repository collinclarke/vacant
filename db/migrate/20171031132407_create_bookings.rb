class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.index :user_id
      t.integer :spot_id, null: false
      t.index :spot_id
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
