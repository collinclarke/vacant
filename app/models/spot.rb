# == Schema Information
#
# Table name: spots
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  address    :string           not null
#  price      :string           not null
#  kind       :string           not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Spot < ApplicationRecord
  validates :title, :address, :price, :kind, :host_id, presence: true
  geocoded_by :address
  after_validation :geocode
  has_attached_file :main_image, default_url: "sampleOffice.jpg"
  validates_attachment_content_type :main_image, content_type: /\Aimage\/.*\Z/
end
