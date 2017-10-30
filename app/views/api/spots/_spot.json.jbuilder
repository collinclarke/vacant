json.extract! spot, :id, :title, :address, :price, :kind, :latitude, :longitude
json.host spot.host.first_name
json.ratings spot.calculate_reviews_sql
json.reviews spot.reviews.map{|review| review.id}

json.image_url asset_path(spot.main_image.url)
