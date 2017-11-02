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

  has_attached_file :main_image, default_url: "sampleOffice.jpg"
  validates_attachment_content_type :main_image, content_type: /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/

  has_many :reviews

  has_many :bookings,
  foreign_key: :spot_id,
  class_name: :Booking

  has_many :residents,
  through: :bookings,
  source: :user

  has_many :reviewers,
  through: :reviews,
  source: :user

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  def calculate_reviews
    ratings = {"overall" => 0,
    "accuracy" => 0,
    "communication" => 0,
    "cleanliness" => 0,
    "location" => 0,
    "check_in" => 0,
    "value" => 0 }
    review_count = 0
    self.reviews.each do |review|
      review_count += 1
      ratings["overall"] += (review.overall)
      ratings["accuracy"] += (review.accuracy)
      ratings["communication"] += (review.communication)
      ratings["cleanliness"] += (review.cleanliness)
      ratings["location"] += (review.location)
      ratings["check_in"] += (review.check_in)
      ratings["value"] += (review.value)
    end
    require 'json'
    ratings.values.each do |value|
      value / review_count
    end
    ratings = ratings.as_json
    ratings
  end

  def calculate_reviews_sql
    ratings = {"overall" => reviews.average(:overall).to_f,
    "accuracy" => reviews.average(:accuracy).to_f,
    "communication" => reviews.average(:communication).to_f,
    "cleanliness" => reviews.average(:cleanliness).to_f,
    "location" => reviews.average(:location).to_f,
    "check_in" => reviews.average(:check_in).to_f,
    "value" => reviews.average(:value).to_f }
    ratings.as_json
  end

  def calculate_overall_sql
    reviews.average(:overall).to_f
  end

end
