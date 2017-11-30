json.extract! user, :id, :email, :first_name, :last_name
json.reviews user.reviews.map{|review| review.id}
json.image_url asset_path(user.image.url(:thumb))
json.bookings user.bookings.map{|booking| booking.id}
json.bookedSpots user.booked_spots.map{|spot| spot.id}
