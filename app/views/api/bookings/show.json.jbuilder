json.set! "booking" do
  json.partial! 'booking', booking: @booking
end
json.set! "host" do
  json.partial! 'api/users/currentUser', user: @booking.host
end
