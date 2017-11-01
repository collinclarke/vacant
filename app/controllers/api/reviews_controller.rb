class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :user_id, :spot_id, :overall,
      :user_impression, :cleanliness, :cleanliness_note, :accuracy,
      :accuracy_note, :communication, :communication_note, :check_in,
      :check_in_note, :value, :value_note, :location, :location_note,
      :private_note, :public_review
    )
  end
end
