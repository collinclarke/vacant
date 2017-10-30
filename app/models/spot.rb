# == Schema Information
#
# Table name: spots
#
#  id                      :integer          not null, primary key
#  title                   :string           not null
#  address                 :string           not null
#  price                   :string           not null
#  kind                    :string           not null
#  host_id                 :integer          not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  main_image_file_name    :string
#  main_image_content_type :string
#  main_image_file_size    :integer
#  main_image_updated_at   :datetime
#  longitude               :float
#  latitude                :float
#

class Spot < ApplicationRecord
  validates :title, :address, :price, :kind, :host, presence: true
  geocoded_by :address
  after_validation :geocode
  has_attached_file :main_image, default_url: "sampleOffice.jpg"
  validates_attachment_content_type :main_image, content_type: /\Aimage\/.*\Z/

  has_many :reviews
  
  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User
end
