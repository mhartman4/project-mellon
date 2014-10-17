class LinearRegressionController < ApplicationController
  def index

    if params[:x].nil? || params[:y].nil?
      params[:x] = "minutes"
      params[:y] = "fanduel_points"
    end

    @game_data = Game.all.pluck(params[:x], params[:y])
    @x = @game_data.collect {|point| point[0] }
    @y = @game_data.collect {|point| point[1] }

    @col_names = Game.columns.select {|c| c.type==:float}.collect {|c| c.name}.reject! {|c| c.include? "fdp"}
  end
end
