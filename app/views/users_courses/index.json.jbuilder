json.array!(@users_courses) do |users_course|
  json.extract! users_course, :id, :user_id, :course_id, :buffer
  json.url users_course_url(users_course, format: :json)
end
