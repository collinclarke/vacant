class Api::SpotsController < ApplicationController
  def index
    @spots = bounds ? Spot.in_bounds(bounds).includes(:reviews) : Spot.includes(:reviews)
  end

  def show
    @spot = Spot.includes(:reviews).find(params[:id])
  end

  private

  def bounds
    params[:bounds]
  end

  # def spot_params
  #   params.require(:spot).permit(
  #     :title,
  #     :address,
  #     :price,
  #     :kind,
  #     :host_id
  #   )
  # end

end
