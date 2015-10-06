class CreateScreenings < ActiveRecord::Migration
  def change
    create_table :screenings do |t|
      t.references :user, index: true, foreign_key: true
      t.references :application, index: true, foreign_key: true
      t.string :type
      t.date :date
      t.integer :duration
      t.text :notes
      t.text :buffer

      t.timestamps null: false
    end
  end
end
