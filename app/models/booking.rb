class Booking < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze
  
  validates :user_id, :spot_id, :start_date, :end_date, :status, presence: true

  belongs_to :user
  belongs_to :spot

end
