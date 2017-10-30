json.extract! spot, :id, :title, :address, :price, :kind, :host, :latitude, :longitude
json.image_url asset_path(spot.main_image.url)
