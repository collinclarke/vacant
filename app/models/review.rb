# == Schema Information
#
# Table name: reviews
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  spot_id            :integer          not null
#  overall            :integer          not null
#  user_impression    :integer          not null
#  cleanliness        :integer          not null
#  cleanliness_note   :string
#  accuracy           :integer          not null
#  accuracy_note      :string
#  communication      :integer          not null
#  communication_note :string
#  check_in           :integer          not null
#  check_in_note      :string
#  value              :integer          not null
#  value_note         :string
#  location           :integer          not null
#  location_note      :string
#  private_note       :string
#  public_review      :string
#  response           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Review < ApplicationRecord
  validates :user, :spot, :overall, :user_impression,
  :cleanliness, :accuracy, :communication, :check_in,
  :value, :location, presence: true

  belongs_to :user
  belongs_to :spot

  has_one :host,
  through: :spot,
  source: :host

end
