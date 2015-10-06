class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :skype
      t.string :date_of_birth
      t.string :password_digest
      t.string :type
      t.string :buffer

      t.timestamps null: false
    end
  end
end
