class User < ActiveRecord::Base
  has_many :screenings
  has_many :applications
  has_many :users_courses
  has_secure_password

  def self.type
      %w(Candidate Instructor Admissions_Officer)
  end

  scope :candidate, -> { where(type: 'Candidate') }
  scope :instructor, -> { where(type: 'Instructor') }
  scope :admisssions_officer, -> { where(type: 'Admissions_Officer') }

end
