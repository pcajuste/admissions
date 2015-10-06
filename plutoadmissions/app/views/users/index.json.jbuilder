json.array!(@users) do |user|
  json.extract! user, :id, :first_name, :last_name, :email, :phone, :skype, :date_of_birth, :password, :type, :buffer
  json.url user_url(user, format: :json)
end
