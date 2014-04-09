class Game < ActiveRecord::Base
  belongs_to :player
  default_scope order('game_day DESC')


  def more_than_twenty?
    self.points > 20.0
  end
end
