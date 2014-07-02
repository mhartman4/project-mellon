class Player < ActiveRecord::Base

  has_many :games
  attr_reader :player_tokens

  def player_tokens=(ids)
    self.player_ids = ids.split(",")
  end

  def self.search(search)
    if search
      @players = Player.find(:all, conditions: ['name LIKE ?', "%#{search}%"])
    else
      @players = Player.all
    end
  end

end
