json.extract! user, :email, :first_name, :last_name
json.reviews user.reviews.map{|review| review.id}
json.bookings user.bookings.map{|booking| booking.id}
