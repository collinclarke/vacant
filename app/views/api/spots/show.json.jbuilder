json.set! "spot" do
  json.partial! 'spot', spot: @spot
  json.ratings @spot.calculate_reviews_sql
end

json.set! "reviews" do
  @spot.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
