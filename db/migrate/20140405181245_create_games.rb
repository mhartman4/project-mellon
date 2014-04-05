class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.float :fanduel_points
      t.date :date

      t.timestamps
    end
  end
end
