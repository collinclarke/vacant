json.partial! 'spot', spot: @spot
json.reviews do
  json.partial! 'api/reviews/review', collection: @spot.reviews, as: :review
end
