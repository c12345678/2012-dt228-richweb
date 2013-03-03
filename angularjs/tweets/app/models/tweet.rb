class Tweet < ActiveRecord::Base
  attr_accessible :body
  validates :body, presence: true
end
