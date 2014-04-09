json.array!(@players) do |player|
  json.extract! player, :id
  #json.url player_url(player, format: :json)
  json.name player.name
end
