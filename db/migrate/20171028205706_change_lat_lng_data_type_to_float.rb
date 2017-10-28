class ChangeLatLngDataTypeToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :latitude, :float
    change_column :spots, :longitude, :float
  end
end
