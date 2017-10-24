class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :password_digest, null: false
      t.integer :session_token, null: false
      t.string :img_url
      t.date :birth_date, null: false
      t.string :currency
      t.string :language
      t.string :description
      t.timestamps
    end
  end
end
