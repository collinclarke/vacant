class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])
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
