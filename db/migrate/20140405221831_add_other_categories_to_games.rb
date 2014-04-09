class AddOtherCategoriesToGames < ActiveRecord::Migration
  def change
    add_column :games, :minutes, :float
    add_column :games, :rotowire_fdp, :float
    add_column :games, :numberfire_fdp, :float
  end
end
