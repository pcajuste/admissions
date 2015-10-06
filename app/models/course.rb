class Course < ActiveRecord::Base
  has_many :users_courses
  has_many :applications
end
