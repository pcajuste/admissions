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

ActiveRecord::Schema.define(version: 20151006150245) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "course_id"
    t.string   "resume"
    t.string   "status"
    t.string   "stage"
    t.text     "notes"
    t.text     "education"
    t.text     "experience"
    t.text     "skils"
    t.text     "motive"
    t.text     "hear"
    t.text     "additional"
    t.text     "buffer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "applications", ["course_id"], name: "index_applications_on_course_id", using: :btree
  add_index "applications", ["user_id"], name: "index_applications_on_user_id", using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.date     "start_date"
    t.date     "end_date"
    t.string   "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "screenings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "application_id"
    t.string   "type"
    t.date     "date"
    t.integer  "duration"
    t.text     "notes"
    t.text     "buffer"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "screenings", ["application_id"], name: "index_screenings_on_application_id", using: :btree
  add_index "screenings", ["user_id"], name: "index_screenings_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.string   "skype"
    t.string   "date_of_birth"
    t.string   "password_digest"
    t.string   "type"
    t.string   "buffer"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users_courses", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "course_id"
    t.string   "buffer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users_courses", ["course_id"], name: "index_users_courses_on_course_id", using: :btree
  add_index "users_courses", ["user_id"], name: "index_users_courses_on_user_id", using: :btree

  add_foreign_key "applications", "courses"
  add_foreign_key "applications", "users"
  add_foreign_key "screenings", "applications"
  add_foreign_key "screenings", "users"
  add_foreign_key "users_courses", "courses"
  add_foreign_key "users_courses", "users"
end
