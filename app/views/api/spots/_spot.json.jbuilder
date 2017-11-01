json.extract! spot, :id, :title, :address, :price, :kind, :latitude, :longitude
json.host_id spot.host.id
json.image_url asset_path(spot.main_image.url)
json.ratings spot.calculate_overall_sql
json.numReviews spot.reviews.count
json.reviews spot.reviews.map{|review| review.id}
json.bookings spot.bookings.map{|booking| booking.id}
