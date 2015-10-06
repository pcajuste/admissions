class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.references :user, index: true, foreign_key: true
      t.references :course, index: true, foreign_key: true
      t.string :resume
      t.string :status
      t.string :stage
      t.text :notes
      t.text :education
      t.text :experience
      t.text :skils
      t.text :motive
      t.text :hear
      t.text :additional
      t.text :buffer

      t.timestamps null: false
    end
  end
end
