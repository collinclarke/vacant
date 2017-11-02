class Api::SpotsController < ApplicationController
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    @spots = spots.includes(:reviews)
  end

  def show
    @spot = Spot.find(params[:id])
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
