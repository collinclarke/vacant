json.set! "spots" do
  @spots.each do |spot|
    json.set! spot.id do
      json.partial! 'spot', spot: spot
    end
  end
end

json.set! "users" do
  @spots.each do |spot|
    json.set! spot.host.id do
      json.partial! 'api/users/user', user: spot.host
    end
  end
end
