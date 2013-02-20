class TweetsController < ApplicationController
  respond_to :json, :html

  def index
    respond_with Tweet.order("created_at DESC")
  end

  def create
    respond_with Tweet.create(params[:tweet])
  end

  def destroy
    respond_with Tweet.destroy(params[:id])
  end
end
