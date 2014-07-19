class LinearRegressionController < ApplicationController

  def index
    @game_data = Game.all.pluck(params[:x], params[:y])
    @x = @game_data.collect {|point| point[0] }
    @y = @game_data.collect {|point| point[1] }
  end
end
