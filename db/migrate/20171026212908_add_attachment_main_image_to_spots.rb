class AddAttachmentMainImageToSpots < ActiveRecord::Migration[5.1]
  def self.up
    change_table :spots do |t|
      t.attachment :main_image
    end
  end

  def self.down
    remove_attachment :spots, :main_image
  end
end
