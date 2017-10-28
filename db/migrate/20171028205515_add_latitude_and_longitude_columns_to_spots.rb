class AddLatitudeAndLongitudeColumnsToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :longitude, :integer
    add_column :spots, :latitude, :integer
  end
end
