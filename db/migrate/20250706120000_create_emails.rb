class CreateEmails < ActiveRecord::Migration[7.0]
  def change
    create_table :emails do |t|
      t.string :subject
      t.string :sender
      t.string :recipient
      t.text :body
      t.datetime :received_at

      t.timestamps
    end
  end
end
