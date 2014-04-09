class AddStatCategoriesToGames < ActiveRecord::Migration
  def change
    add_column :games, :is_starter, :boolean
    add_column :games, :team, :string
    add_column :games, :opponent, :string
    add_column :games, :points, :float
    add_column :games, :rebounds, :float
    add_column :games, :assists, :float
    add_column :games, :steals, :float
    add_column :games, :blocks, :float
    add_column :games, :turnovers, :float
  end
end
