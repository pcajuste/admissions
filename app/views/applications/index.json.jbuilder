json.array!(@applications) do |application|
  json.extract! application, :id, :user_id, :course_id, :resume, :status, :stage, :notes, :education, :experience, :skils, :motive, :hear, :additional, :buffer
  json.url application_url(application, format: :json)
end
