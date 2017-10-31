class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors, status: 401
    end
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

  def cat_rental_request_params
    params.require(:booking).permit(:spot_id, :end_date, :start_date, :status)
  end


end
