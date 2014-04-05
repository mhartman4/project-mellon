class Game < ActiveRecord::Base
  belongs_to :player
  default_scope order('game_day DESC')

  def self.to_hc_data(games)

  end
end
