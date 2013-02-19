class TweetsController < ApplicationController
  def index
    @tweets = Tweet.order("created_at desc")
    @tweet = Tweet.new
  end

  def new
  end

  def create
    @tweet = Tweet.create(params[:tweet])
    if @tweet
      render json: @tweet
    else
      head status: 400
    end
  end

  def destroy
  end
end
