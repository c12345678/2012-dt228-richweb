class MapsController < ApplicationController
  def index
  end

  def cities
    names = City.where('name LIKE ?', params[:term] + '%').map(&:name)
    render json: names
  end
end
