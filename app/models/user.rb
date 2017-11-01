# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  first_name         :string           not null
#  last_name          :string           not null
#  password_digest    :string           not null
#  session_token      :integer          not null
#  birth_date         :date             not null
#  currency           :string
#  language           :string
#  description        :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  validates :email, :first_name, :last_name, :password_digest, :session_token, :birth_date, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_attached_file :image, default_url: "userIcon.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews

  has_many :bookings,
  foreign_key: :user_id,
  class_name: :Booking

  has_many :booked_spots,
  through: :bookings,
  source: :spot

  has_many :reviewed_spots,
  through: :reviews,
  source: :spot

  has_many :spots

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(email, pw)
    user = User.find_by_email(email)
    user && user.valid_password?(pw) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def valid_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
