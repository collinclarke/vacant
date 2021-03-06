class Booking < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

  validates :start_date, :end_date, :status, :residents, presence: true
  validates :status, inclusion: STATUS_STATES

  validate :start_must_come_before_end
  validate :does_not_overlap_approved_request
  # if: Proc.new { |booking| booking.start_date && booking.end_date}

  belongs_to :user
  belongs_to :spot

  has_one :host,
  through: :spot,
  source: :host

  def approve!
    raise 'not pending' unless self.status == 'PENDING'
    transaction do
      self.status = 'APPROVED'
      self.save!

      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end

  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end

  def pending?
    self.status == 'PENDING'
  end

  private

  def assign_pending_satatus
    self.status ||= 'PENDING'
  end

  def overlapping_requests
    Booking
    .where.not(id: self.id)
    .where(spot_id: spot_id)
    .where.not('start_date > :end_date OR end_date < :start_date',
                start_date: self.start_date, end_date: self.end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where('status = \'APPROVED\'')
  end

  def overlapping_pending_requets
    overlapping_requests.where('status = \'PENDING\'')
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] << 'Request conflicts with existing approved request'
    end
  end

  def start_must_come_before_end
    if (start_date && end_date)
      errors[:start_date] << 'must come before end date' if self.start_date > self.end_date
    end
  end


end
