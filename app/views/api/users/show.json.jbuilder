json.partial! 'api/users/user', user: @user

json.extract! @user, :email, :last_name
json.reviews @user.reviews.map{|review| review.id}
json.bookings @user.bookings.map{|booking| booking.id}
