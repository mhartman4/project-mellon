# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140511170536) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: true do |t|
    t.float    "fanduel_points"
    t.date     "game_day"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "player_id"
    t.float    "minutes"
    t.float    "rotowire_fdp"
    t.float    "numberfire_fdp"
    t.boolean  "is_starter"
    t.string   "team"
    t.string   "opponent"
    t.float    "points"
    t.float    "rebounds"
    t.float    "assists"
    t.float    "steals"
    t.float    "blocks"
    t.float    "turnovers"
    t.integer  "salary"
  end

  create_table "players", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

end
