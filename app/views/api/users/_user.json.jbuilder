json.extract! user, :id, :email, :first_name
json.reviews user.reviews.map{|review| review.id}
json.bookings user.bookings.map{|booking| booking.id}
json.image_url asset_path(user.image.url)
