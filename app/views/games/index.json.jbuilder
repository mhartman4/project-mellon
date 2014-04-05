json.array!(@games) do |game|
  json.extract! game, :id, :fanduel_points, :game_day
  json.url game_url(game, format: :json)
end
