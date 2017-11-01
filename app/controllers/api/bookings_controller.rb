class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = current_user.bookings
  end

  def approve
    current_spot_booking.approve!
  end

  def deny
    current_spot_booking.deny!
  end

  private

  def current_spot_booking
    @booking ||= Booking.includes(:spot).find(params[:id])
  end

  def current_spot
    current_spot_booking.spot
  end

  def booking_params
    params.require(:booking).permit(:spot_id, :user_id, :end_date, :start_date, :residents, :status)
  end


end
