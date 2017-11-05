json.set! "spot" do
  json.partial! 'spot', spot: @spot
  json.cover_image asset_path(@spot.main_image.url(:cover))
  json.ratings @spot.calculate_reviews_sql
  json.bookings @spot.bookings.map{|booking| booking.id}
end

json.set! "reviews" do
  @spot.reviews.each do |review|
    if review.public_review && review.public_review != ""
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  end
end


json.set! "currentUser" do
  json.partial! 'api/users/currentUser', user: current_user
end

json.set! "host" do
  json.partial! 'api/users/user', user: @spot.host
end
