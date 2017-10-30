json.extract! review, :id, :spot_id, :overall, :public_review
json.month_created review.created_at.strftime("%B %Y")
json.set! "author" do
  json.partial! 'api/users/user', user: review.user
end
