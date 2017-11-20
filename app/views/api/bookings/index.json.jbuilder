json.set! "bookings" do
  @bookings.each do |booking|
    json.set! booking.id do
      json.partial! 'booking', booking: booking
    end
  end
end

json.set! "spots" do
  @bookings.each do |booking|
    json.set! booking.spot_id do
      json.partial! 'api/spots/spot_preview', spot: booking.spot
    end
  end
end
