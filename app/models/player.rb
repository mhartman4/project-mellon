class Player < ActiveRecord::Base

  has_many :games
  attr_reader :teams

  def player_tokens=(ids)
    player_ids = ids.split(",")
  end

  def self.search(search)
    if search
      @players = Player.find(:all, conditions: ['name LIKE ?', "%#{search}%"])
    else
      @players = Player.all
    end
  end

  def teams
    games.pluck(:team).uniq.to_sentence
  end

  def fdp_per_game
    games.pluck(:fanduel_points).sum / games.length
  end

  def fdp_per_36
    games.collect {|game| (game.fanduel_points / game.minutes) * 36}.sum / games.length
  end

  def minutes_per_game
    games.pluck(:minutes).sum / games.length
  end

  def avg_adj_fdp_per_1k
    if games.pluck(:salary).all?
      games.collect { |game| (game.fanduel_points / game.salary)*1000 }.sum / games.length
    else
      0.0
    end
  end

end
