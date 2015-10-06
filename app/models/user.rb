class User < ActiveRecord::Base
  has_many :screenings
  has_many :applications
  has_many :users_courses
  has_secure_password
end
