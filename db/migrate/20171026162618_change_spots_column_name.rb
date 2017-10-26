class ChangeSpotsColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :spots, :type, :kind
  end
end
