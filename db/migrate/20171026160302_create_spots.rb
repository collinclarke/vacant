class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.string :address, null: false
      t.string :price, null: false
      t.string :type, null: false
      t.integer :host_id, null: false
      t.index :host_id 
      t.timestamps
    end
  end
end
