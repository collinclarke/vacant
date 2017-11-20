json.extract! spot, :id, :title, :price, :kind
json.image_url asset_path(spot.main_image.url(:item))
json.ratings spot.calculate_overall_sql
json.numReviews spot.reviews.count
