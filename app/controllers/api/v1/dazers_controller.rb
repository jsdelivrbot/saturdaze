class Api::V1::DazersController < ApplicationController
  def index
    render json: Dazer.all
  end

  def show
    render json: Dazer.find(params[:id])
  end
end
