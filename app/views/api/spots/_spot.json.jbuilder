json.extract! spot, :id, :title, :address, :price, :kind, :latitude, :longitude
json.host spot.host.first_name
json.image_url asset_path(spot.main_image.url)
