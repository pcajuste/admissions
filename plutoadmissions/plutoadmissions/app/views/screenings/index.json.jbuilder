json.array!(@screenings) do |screening|
  json.extract! screening, :id, :user_id, :application_id, :type, :date, :duration, :notes, :buffer
  json.url screening_url(screening, format: :json)
end
