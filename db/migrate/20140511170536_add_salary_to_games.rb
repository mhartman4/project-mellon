class AddSalaryToGames < ActiveRecord::Migration
  def change
    add_column :games, :salary, :integer
  end
end
