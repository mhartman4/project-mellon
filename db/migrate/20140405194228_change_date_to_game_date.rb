class ChangeDateToGameDate < ActiveRecord::Migration
  def change
    rename_column :games, :date, :game_day
  end
end
