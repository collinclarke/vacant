json.extract! user, :id, :email, :first_name
json.image_url asset_path(user.image.url)
