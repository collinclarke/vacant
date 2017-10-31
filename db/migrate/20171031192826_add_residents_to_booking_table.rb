class AddResidentsToBookingTable < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :residents, :integer
  end
end
